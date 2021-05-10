"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const logger_1 = __importDefault(require("./util/logger"));
const config = app_1.default.get('config');
/**
 * Start Express server.
 */
const server = app_1.default.listen(config.port, () => logger_1.default.info(`app is listening on port ${config.port}`));
exports.default = server;
//# sourceMappingURL=server.js.map