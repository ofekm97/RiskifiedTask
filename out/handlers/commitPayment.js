"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../util/logger"));
const creditCardCompanyFactory_1 = require("../creditCardCompanies/creditCardCompanyFactory");
const factory = new creditCardCompanyFactory_1.creditCardCompanyFactory();
function commitPayment(charge, req, res, next) {
    logger_1.default.info('trying to charge the credit card');
    commitPaymentWithRetries(charge, 1, next);
}
exports.commitPayment = commitPayment;
function commitPaymentWithRetries(charge, retries, next) {
    let currentCompany = factory.getCompanyByName(charge.creditCardCompany);
    currentCompany.pay(charge)
        .then((response) => {
        let parsed_response = currentCompany.parseResponse(response);
        if (!parsed_response.error) {
            next(parsed_response);
        }
        else {
            throw response;
        }
    }).catch((err) => {
        if (retries <= currentCompany.amountOfRetries() && !currentCompany.isInfluenceFunds(err)) {
            logger_1.default.info(`retries = ${retries}`);
            setTimeout(commitPaymentWithRetries, Math.pow(retries, 2) * 1000, charge, retries + 1, next);
        }
        else {
            let response = {
                status: 200,
                error: currentCompany.getDeclineReason(err)
            };
            next(response);
        }
    });
}
//# sourceMappingURL=commitPayment.js.map