import { NextFunction, Request, Response } from 'express';
import { merchantChargeInterface } from "../APIs/charge-api";
import logger from '../util/logger';
import { validateRequest } from "../handlers/validator";

const chargeController = {
    post: (req: Request, res: Response, next: NextFunction) => {
        logger.info('recived api/charge post request');
        let charge: merchantChargeInterface = {
            merchant: req.rawHeaders.includes("merchant-identifier") ? req.headers["merchant-identifier"] : undefined,
            ...req.body
        }
        if (!validateRequest(charge)) {
            res.status(400).send();
        } else {
            next(charge)
        }
    }
};


export default chargeController;
