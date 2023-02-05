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
const connect_1 = __importDefault(require("./connect"));
function getAllProduct() {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            const db = yield (0, connect_1.default)('products');
            if (db instanceof Error)
                return reject(db);
            const products = db.collection('products');
            const productsList = products.find({});
            if ((yield products.countDocuments()) == 0) {
                return resolve({
                    amount: 0,
                });
            }
            return resolve({
                amount: yield products.countDocuments(),
                products: yield productsList.toArray()
            });
        }
        catch (error) {
            reject(error);
        }
    }));
}
exports.default = getAllProduct;
