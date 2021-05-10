import logger from "../util/logger";
import { merchantChargeInterface } from "../APIs/charge-api";


function validateRequestTypes(api: merchantChargeInterface): boolean {
    return (typeof (api.merchant) == "string" &&
        typeof (api.fullName) == "string" &&
        typeof (api.creditCardNumber) == "string" && (api.creditCardNumber.length == 16) &&
        typeof (api.creditCardCompany) == "string" &&
        typeof (api.expirationDate) == "string" &&
        typeof (api.cvv) == "string" &&
        typeof (api.amount) == "number");

}

function validateRequestValues(api: merchantChargeInterface): boolean {
    let expirationDateRegex = /^(0[1-9]|1[0-2])\/(([0-9]{4}|[0-9]{2}))$/
    return (api.creditCardCompany == "visa" || api.creditCardCompany == "mastercard") &&
        expirationDateRegex.test(api.expirationDate)
}

// function validateRequestExistance(api: merchantChargeInterface): boolean {
//     return (api.merchant && api.fullName && api.expirationDate && api.cvv && api.creditCardNumber && api.creditCardCompany && api.amount == undefined)
// }

export function validateRequest(api: merchantChargeInterface) {
    return validateRequestTypes(api) && validateRequestValues(api);
}