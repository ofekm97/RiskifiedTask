import { NextFunction, Request, Response } from 'express';
import logger from '../util/logger';
import { generalResponse } from "../APIs/charge-api";

export function returnSuccessOrFailed(parsed_response: generalResponse, req: Request, res: Response, next: NextFunction) {
    
    if (parsed_response.status == 200 && parsed_response.error) {
        res.status(200).send({ error: parsed_response.error })
        logger.info(`Charge Failed: ${parsed_response.error}`)
    } else {
        res.sendStatus(parsed_response.status)
    }
}