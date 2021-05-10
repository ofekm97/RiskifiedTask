import { creditCardCompanyName } from "../creditCardCompanies/creditCardCompany";

// interface for new merchat charge
export interface merchantChargeInterface {
    merchant: string
    fullName: string,
    creditCardNumber: string,
    creditCardCompany: creditCardCompanyName,
    expirationDate: string,
    cvv: string,
    amount: number,
}

export interface generalResponse {
    status: number,
    error?: string
}