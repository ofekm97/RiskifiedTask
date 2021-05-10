import { creditCardCompany, creditCardCompanyName } from './creditCardCompany'
import { Visa } from './visa'
import { Mastercard } from './mastercard'

export class creditCardCompanyFactory {
    private visa: creditCardCompany;
    private mastercard: creditCardCompany;

    constructor() {
    }

    public getCompanyByName(companyName: creditCardCompanyName) {
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