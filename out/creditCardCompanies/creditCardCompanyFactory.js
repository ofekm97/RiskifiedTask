"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const visa_1 = require("./visa");
const mastercard_1 = require("./mastercard");
class creditCardCompanyFactory {
    constructor() {
    }
    getCompanyByName(companyName) {
        if (companyName == 'visa') {
            if (this.visa) {
                return this.visa;
            }
            else {
                this.visa = new visa_1.Visa();
                return this.visa;
            }
        }
        else if (companyName == 'mastercard') {
            if (this.mastercard) {
                return this.mastercard;
            }
            else {
                this.mastercard = new mastercard_1.Mastercard();
                return this.mastercard;
            }
        }
    }
}
exports.creditCardCompanyFactory = creditCardCompanyFactory;
//# sourceMappingURL=creditCardCompanyFactory.js.map