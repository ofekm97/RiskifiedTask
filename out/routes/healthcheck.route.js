"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const healthcheck_controller_1 = __importDefault(require("../controllers/healthcheck.controller"));
const router = express_1.Router();
router.get('/', healthcheck_controller_1.default.get);
exports.default = router;
//# sourceMappingURL=healthcheck.route.js.map