"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../controllers/admin/index"));
const validateProduct_1 = __importDefault(require("../middleware/validateProduct"));
const router = express_1.default.Router();
router.get('/insert', validateProduct_1.default, index_1.default.insert);
router.get('/update/:name', validateProduct_1.default, index_1.default.update);
exports.default = router;
