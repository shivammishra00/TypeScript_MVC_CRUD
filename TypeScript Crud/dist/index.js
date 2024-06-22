"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // step 1
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const app = (0, express_1.default)(); //step 2
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();
//////=========== Routes ============///
const empRouter = require('./Routes/empRoute/empRoute.ts');
app.use("/", empRouter);
//============================================//
const port = process.env.PORT; // step 3
app.listen(port, () => {
    console.log(`server is running on port${port}`);
});
