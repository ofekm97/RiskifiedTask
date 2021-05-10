"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../util/logger"));
const validator_1 = require("../handlers/validator");
const chargeController = {
    post: (req, res, next) => {
        logger_1.default.info('recived api/charge post request');
        let charge = Object.assign({ merchant: req.rawHeaders.includes("merchant-identifier") ? req.headers["merchant-identifier"] : undefined }, req.body);
        if (!validator_1.validateRequest(charge)) {
            res.status(400).send();
        }
        else {
            next(charge);
        }
    }
};
exports.default = chargeController;
//# sourceMappingURL=charge.controller.js.map