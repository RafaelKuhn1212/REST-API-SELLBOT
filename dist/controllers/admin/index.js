"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const insert_1 = __importDefault(require("./insert"));
const update_1 = __importDefault(require("./update"));
exports.default = {
    insert: insert_1.default,
    update: update_1.default
};
