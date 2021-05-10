import { generalResponse, merchantChargeInterface } from "../APIs/charge-api";
import { creditCardCompany } from "./creditCardCompany";

interface VisaBodyInterface {
    fullName: string,
    number: string,
    expiration: string,
    cvv: string,
    totalAmount: number,
}

type ChargeResult = 'Success' | 'failure';

interface VisaResponse {
    chargeResult: ChargeResult,
    resultReason: string
}


export class Visa extends creditCardCompany {
    constructor() {
        super();
        this.chargeStatuses = {};
        this.name = "visa";
        this.identifier = "ofek";
        this.company_url = "https://interview.riskxint.com/visa/api/chargeCard";
    }

    buildRequestBody(charge_request: merchantChargeInterface): VisaBodyInterface {
        return {
            fullName: charge_request.fullName,
            number: charge_request.creditCardNumber,
            expiration: charge_request.expirationDate,
            cvv: charge_request.cvv,
            totalAmount: charge_request.amount
        };
    }

    isInfluenceFunds(error: any) {
        if (error.data) {
            return error.data.resultReason == "InsufficiantFunds";
        }
    }

    getDeclineReason(error: any) {
        if(error.data) {   
            return error.data.resultReason;
        }
    }

    parseResponse(error: any): generalResponse {
        let data: VisaResponse = error.data
        if (data.chargeResult == 'Success') {
            return {
                status: 200,
            }
        } else {
            return {
                status: 200,
                error: data.resultReason
            }
        }
    }
}