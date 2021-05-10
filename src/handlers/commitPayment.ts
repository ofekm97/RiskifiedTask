import { NextFunction, Request, Response } from 'express';
import logger from '../util/logger';
import { generalResponse, merchantChargeInterface } from "../APIs/charge-api";
import { creditCardCompanyFactory } from '../creditCardCompanies/creditCardCompanyFactory';


const factory: creditCardCompanyFactory = new creditCardCompanyFactory();

export function commitPayment(charge: merchantChargeInterface, req: Request, res: Response, next: NextFunction) {
    logger.info('trying to charge the credit card');
    commitPaymentWithRetries(charge, 1, next);
}

function commitPaymentWithRetries(charge: merchantChargeInterface, retries: number, next: NextFunction) {
    let currentCompany = factory.getCompanyByName(charge.creditCardCompany);
    currentCompany.pay(charge)
        .then((response: any) => {
            let parsed_response: generalResponse = currentCompany.parseResponse(response);
            if(!parsed_response.error) {
                next(parsed_response);
            } else {
                throw response
            }
        }).catch((err) => {
            if(retries <= currentCompany.amountOfRetries() && !currentCompany.isInfluenceFunds(err)) {
                logger.info(`charging failed. retring (retry number: ${retries})`)
                setTimeout(commitPaymentWithRetries, Math.pow(retries,2)*1000, charge, retries+1, next);
            }
            else {
                let response: generalResponse = {
                    status: 200,
                    error: currentCompany.getDeclineReason(err)
                }
                next(response);
            }
        });
}