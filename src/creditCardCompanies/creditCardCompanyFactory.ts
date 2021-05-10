import { CreditCardCompany } from './creditCardCompany'
import { Visa } from './visa'
import { Mastercard } from './mastercard'

const creditCardCompanyNames = ['visa','mastercard'] as const;
export type CreditCardCompanyName = typeof creditCardCompanyNames[number];

export function isCompanyName(name: string): boolean {
    return name in creditCardCompanyNames;
}

export class creditCardCompanyFactory {
    private visa: CreditCardCompany;
    private mastercard: CreditCardCompany;

    constructor() {
    }

    // Factory design pattern with singelton that returns each of the credit companies
    public getCompanyByName(companyName: CreditCardCompanyName) {
        if (companyName == 'visa') {
            if (this.visa) {
                return this.visa;
            } else {
                this.visa = new Visa();
                return this.visa;
            }
        } else if (companyName == 'mastercard') {
            if (this.mastercard) {
                return this.mastercard;
            } else {
                this.mastercard = new Mastercard();
                return this.mastercard;
            }
        }
    }
}