import { CreditCardCompanyName } from "../creditCardCompanies/creditCardCompanyFactory";


// interface for new merchat charge
export interface merchantChargeInterface {
    merchant: string
    fullName: string,
    creditCardNumber: string,
    creditCardCompany: CreditCardCompanyName,
    expirationDate: string,
    cvv: string,
    amount: number,
}

export interface generalResponse {
    status: number,
    error?: string
}