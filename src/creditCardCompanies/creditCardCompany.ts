import axios from "axios";
import { merchantChargeInterface } from "../APIs/charge-api";

export type creditCardCompanyName = "visa" | "mastercard"

export abstract class creditCardCompany {
    public name: creditCardCompanyName;
    protected identifier: string;
    protected company_url: string;
    protected chargeStatuses: object;
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
    abstract buildRequestBody(charge_request: merchantChargeInterface): void;
    abstract parseResponse(response: any): any;
    abstract isInfluenceFunds(data: any): any;
    abstract getDeclineReason(error: any): any;
}