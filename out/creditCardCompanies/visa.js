"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const creditCardCompany_1 = require("./creditCardCompany");
class Visa extends creditCardCompany_1.creditCardCompany {
    constructor() {
        super();
        this.chargeStatuses = {};
        this.name = "visa";
        this.identifier = "ofek";
        this.company_url = "https://interview.riskxint.com/visa/api/chargeCard";
    }
    buildRequestBody(charge_request) {
        return {
            fullName: charge_request.fullName,
            number: charge_request.creditCardNumber,
            expiration: charge_request.expirationDate,
            cvv: charge_request.cvv,
            totalAmount: charge_request.amount
        };
    }
    isInfluenceFunds(error) {
        if (error.data) {
            return error.data.resultReason == "InsufficiantFunds";
        }
    }
    getDeclineReason(error) {
        if (error.data) {
            return error.data.resultReason;
        }
    }
    parseResponse(error) {
        let data = error.data;
        if (data.chargeResult == 'Success') {
            return {
                status: 200,
            };
        }
        else {
            return {
                status: 200,
                error: data.resultReason
            };
        }
    }
}
exports.Visa = Visa;
//# sourceMappingURL=visa.js.map