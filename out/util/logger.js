"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const config_1 = __importDefault(require("../config"));
const logLevel = config_1.default.logLevel;
const options = {
    transports: [
        new winston_1.transports.Console({
            level: logLevel,
        }),
    ],
};
const logger = new winston_1.Logger(options);
logger.debug(`Logging initialized at ${logLevel} level`);
exports.default = logger;
//# sourceMappingURL=logger.js.map