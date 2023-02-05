"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = __importDefault(require("../routes/products"));
const admin_1 = __importDefault(require("../routes/admin"));
function appconfig(app) {
    console.log(`Configurando o express...`);
    app.use(express_1.default.urlencoded()); //Configura o express para entender URL (formulários
    app.use(express_1.default.json()); //Configura o express para entender JSON
    app.use('/products', products_1.default); //Configura o express para entender a rota /products
    app.use('/admin', admin_1.default); //Configura o express para entender a rota /admin
}
exports.default = appconfig;
