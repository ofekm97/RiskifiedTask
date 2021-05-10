"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const creditCardCompany_1 = require("./creditCardCompany");
class Mastercard extends creditCardCompany_1.creditCardCompany {
    constructor() {
        super();
        this.chargeStatuses = {};
        this.name = "visa";
        this.company_url = `https://interview.riskxint.com/mastercard/capture_card`;
    }
    getDeclineReason(error) {
        if (error.response) {
            return error.response.data.decline_reason;
        }
    }
    isInfluenceFunds(error) {
        if (error.response) {
            return error.response.data.decline_reason == "Insufficient funds";
        }
    }
    buildRequestBody(charge_request) {
        let client_name = charge_request.fullName.split(" ");
        let client_expiration = charge_request.expirationDate.split("/");
        return {
            first_name: client_name[0],
            last_name: client_name.slice(1).join(' '),
            card_number: charge_request.creditCardNumber,
            expiration: client_expiration.join("-"),
            cvv: charge_request.cvv,
            charge_amount: charge_request.amount
        };
    }
    parseResponse(error) {
        let res = error.response.data;
        if (res && res.status == 200) {
            return {
                status: 200,
            };
        }
        else {
            return {
                status: 200,
                error: 'Card declined'
            };
        }
    }
}
exports.Mastercard = Mastercard;
//# sourceMappingURL=mastercard.js.map