"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../util/logger"));
function returnSuccessOrFailed(parsed_response, req, res, next) {
    if (parsed_response.status == 200 && parsed_response.error) {
        res.status(200).send({ error: parsed_response.error });
        logger_1.default.info(`Charge Failed: ${parsed_response.error}`);
    }
    else {
        res.sendStatus(parsed_response.status);
    }
}
exports.returnSuccessOrFailed = returnSuccessOrFailed;
//# sourceMappingURL=sendSucessOrFail.js.map