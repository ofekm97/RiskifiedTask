"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../util/logger"));
function validateRequestTypes(api) {
    return (typeof (api.merchant) == "string" &&
        typeof (api.fullName) == "string" &&
        typeof (api.creditCardNumber) == "string" && (api.creditCardNumber.length == 16) &&
        typeof (api.creditCardCompany) == "string" &&
        typeof (api.expirationDate) == "string" &&
        typeof (api.cvv) == "string" &&
        typeof (api.amount) == "number");
}
function validateRequestValues(api) {
    let expirationDateRegex = /^(0[1-9]|1[0-2])\/(([0-9]{4}|[0-9]{2}))$/;
    return (api.creditCardCompany == "visa" || api.creditCardCompany == "mastercard") &&
        expirationDateRegex.test(api.expirationDate);
}
function validateRequest(api) {
    logger_1.default.info(api.merchant);
    return validateRequestTypes(api) && validateRequestValues(api);
}
exports.validateRequest = validateRequest;
//# sourceMappingURL=validator.js.map