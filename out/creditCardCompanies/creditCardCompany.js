"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class creditCardCompany {
    constructor() {
        this.identifier = "Ofek";
        this.retries = 1;
    }
    pay(charge_request) {
        return axios_1.default({
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
}
exports.creditCardCompany = creditCardCompany;
//# sourceMappingURL=creditCardCompany.js.map