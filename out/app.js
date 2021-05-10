"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const healthcheck_route_1 = __importDefault(require("./routes/healthcheck.route"));
const charge_route_1 = __importDefault(require("./routes/charge.route"));
const config_1 = __importDefault(require("./config"));
const logger_1 = __importDefault(require("./util/logger"));
// Create Express server
const app = express_1.default();
app.set('config', config_1.default);
// Express configuration
app.use(helmet_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
/**
 * Primary app routes.
 */
app.use('/healthcheck', healthcheck_route_1.default);
app.use('/api/charge', charge_route_1.default);
class ResponseError extends Error {
}
app.use((req, res, next) => {
    let err = new ResponseError('Page Not Found');
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    const error = !err.message ? new ResponseError(err) : err;
    if (!error.status) {
        error.message = 'Internal Server Error';
        error.status = 500;
    }
    logger_1.default.error(error.message);
    res.status(error.status).send(error.message);
});
exports.default = app;
//# sourceMappingURL=app.js.map