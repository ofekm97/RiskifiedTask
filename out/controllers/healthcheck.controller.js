"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../util/logger"));
const healthcheckController = {
    get: (req, res) => {
        logger_1.default.info('healthcheck');
        res.json({
            status: 'OK'
        });
    },
};
exports.default = healthcheckController;
//# sourceMappingURL=healthcheck.controller.js.map