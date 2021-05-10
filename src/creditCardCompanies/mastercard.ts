import { generalResponse, merchantChargeInterface } from "../APIs/charge-api";
import { creditCardCompany } from "./creditCardCompany";
import axios from "axios";

interface MastercardBodyInterface {
    first_name: string,
    last_name: string,
    card_number: string,
    expiration: string,
    cvv: string,
    charge_amount: number,
}

interface MastercardResponse {
    status: number,
    decline_reason?: "Insufficient funds" | string,
}


export class Mastercard extends creditCardCompany {
    constructor() {
        super();
        this.chargeStatuses = {}
        this.name = "visa"
        this.company_url = `https://interview.riskxint.com/mastercard/capture_card`;
    }

    getDeclineReason(error: any) {
        if (error.response) {
            return error.response.data.decline_reason;
        }
    }

    isInfluenceFunds(error: any) {
        if (error.response) {
            return error.response.data.decline_reason == "Insufficient funds";
        }
    }

    buildRequestBody(charge_request: merchantChargeInterface): MastercardBodyInterface {
        let client_name: string[] = charge_request.fullName.split(" ");
        let client_expiration: string[] = charge_request.expirationDate.split("/");
        return {
            first_name: client_name[0],
            last_name: client_name.slice(1).join(' '),
            card_number: charge_request.creditCardNumber,
            expiration: client_expiration.join("-"),
            cvv: charge_request.cvv,
            charge_amount: charge_request.amount
        };
    }

    parseResponse(error: any): generalResponse {
        let res: MastercardResponse = error.response.data
        if (res && res.status == 200) {
            return {
                status: 200,
            }
        } else {
            return {
                status: 200,
                error: 'Card declined'
            }
        }
    }
}