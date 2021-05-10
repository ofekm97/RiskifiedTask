import axios from "axios";
import { merchantChargeInterface } from "../APIs/charge-api";
import { CreditCardCompanyName } from "./creditCardCompanyFactory";


export abstract class CreditCardCompany {
    public name: CreditCardCompanyName;
    protected identifier: string;
    protected company_url: string;
    private retries: number

    constructor() {
        this.identifier = "Ofek";
        this.retries = 3;
    }

    pay(charge_request: merchantChargeInterface): Promise<any> {
        return axios({
            method: 'POST',
            url: this.company_url,
            headers: {
                identifier: this.identifier
            },
            data: this.buildRequestBody(charge_request),
        });
    }
    amountOfRetries() {
        return this.retries;
    }
    // build the relevent request body for the credit card company
    abstract buildRequestBody(charge_request: merchantChargeInterface): void;
    // parse the response body from the credit card company
    abstract parseResponse(response: any): any;
    abstract isInfluenceFunds(data: any): any;
    // get the Decline Reson
    abstract getDeclineReason(error: any): any;
}