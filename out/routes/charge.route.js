"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commitPayment_1 = require("../handlers/commitPayment");
const charge_controller_1 = __importDefault(require("../controllers/charge.controller"));
const sendSucessOrFail_1 = require("../handlers/sendSucessOrFail");
const router = express_1.Router();
router.post('/', charge_controller_1.default.post, commitPayment_1.commitPayment, sendSucessOrFail_1.returnSuccessOrFailed);
exports.default = router;
//# sourceMappingURL=charge.route.js.map