"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getByName_1 = __importDefault(require("../../models/getByName"));
const insertProduct_1 = __importDefault(require("../../models/insertProduct"));
function insert(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, getByName_1.default)(req.body.name);
        if (response instanceof Error)
            return res.status(500).send(response.message);
        if (response.amount > 0)
            return res.status(400).send('Product already exists');
        (0, insertProduct_1.default)(req.body).then((response) => {
            return res.send(response);
        }).catch((err) => {
            return res.status(500).send(err.message);
        });
    });
}
exports.default = insert;
