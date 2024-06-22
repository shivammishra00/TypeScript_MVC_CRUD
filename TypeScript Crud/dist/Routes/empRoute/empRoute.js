"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const empRouter = express_1.default.Router();
const { getData, saveData, updateEmp, deleteData, getParamsData } = require('../../Controller/empController/empController.ts');
empRouter.get("/getdata", getData);
empRouter.post("/savedata", saveData);
empRouter.patch("/updatedata/:id", updateEmp);
empRouter.delete("/deletedata/:id", deleteData);
empRouter.get("/getdata/:id", getParamsData);
module.exports = empRouter;
