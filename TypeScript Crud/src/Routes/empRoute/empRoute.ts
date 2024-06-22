import express from 'express';
const empRouter = express.Router();

const {getData, saveData, updateEmp,deleteData, getParamsData} = require('../../Controller/empController/empController.ts');

empRouter.get("/getdata", getData)
empRouter.post("/savedata", saveData)
empRouter.patch("/updatedata/:id", updateEmp)
empRouter.delete("/deletedata/:id", deleteData)
empRouter.get("/getdata/:id", getParamsData)



module.exports = empRouter