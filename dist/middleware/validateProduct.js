"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const yup = __importStar(require("yup"));
const schema = yup.object().shape({
    price: yup.number().required('Price is required'),
    name: yup.string().required('Name is required'),
    stock: yup.number().required('Stock is required'),
    description: yup.string()
});
function validateProduct(req, res, next) {
    schema.isValid(req.body).then((valid) => {
        if (valid) {
            return next();
        }
        return res.status(400).json({ errror: 'Invalid data, Data must be: price:number, name:string, stock:number, description?:string' });
    }).catch((err) => {
        return res.status(400).json({ error: err.message });
    });
}
exports.default = validateProduct;
;
