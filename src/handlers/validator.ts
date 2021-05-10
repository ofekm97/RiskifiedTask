import { merchantChargeInterface } from "../APIs/charge-api";
import { isCompanyName } from "../creditCardCompanies/creditCardCompanyFactory";


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
    let expirationDateRegex = /^(0[1-9]|1[0-2])\/(([0-9]{4}|[0-9]{2}))$/ // check if format is "MM/YY"
    return (isCompanyName(api.creditCardCompany)) && (expirationDateRegex.test(api.expirationDate))
}

export function validateRequest(api: merchantChargeInterface) {
    return validateRequestTypes(api) && validateRequestValues(api);
}