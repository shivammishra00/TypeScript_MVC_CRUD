import { Request, Response } from "express";
const connection = require("../../Model/dbConfig.ts");

/////////===========  All Types Import =========////////////
import { DataType } from "../TypesDefine/typesdefine";

////======= get api =======//
const getData = (req: Request, res: Response) => {
  let sqlQuery = `SELECT * FROM emp`;
  connection.query(sqlQuery, (err: any, result: any) => {
    if (err)
      return res.json({
        Status: false,
        Error: "Query error",
        error: err.sqlMessage,
      });
    else return res.json({ Status: true, result });
  });
};

///=============  get data by params =============//
const getParamsData = (req: Request, res: Response) => {
  const id:string = req.params.id;
  if (!id) return res.json({ Message: "Data is required" });
  console.log(id);
  const sqlQuery = `SELECT * FROM emp WHERE id = ?`;
  connection.query(sqlQuery, [id], (err: any, result: any) => {
    if (err)
      return res.json({
        Status: false,
        Error: "Query error",
        err: err.sqlMessage,
      });
      else if(result.affectedRows===0) return res.json({Message:"Id not found"})
    else return res.json({ Status: true, result });
  });
};

// ============ post api ============//
const saveData = (req: Request, res: Response) => {
  console.log(req.body);
  const sqlQuery = `INSERT INTO emp SET ?`;
  const data: DataType = {
    id: req.body.id,
    name: req.body.name,
    image: req.body.image,
    email: req.body.email,
    password: req.body.password,
  };
  if (!data) return res.json({ Error: "Data is Required" });
  connection.query(sqlQuery, [data], (err: any, result: any) => {
    if (err)
      return res.json({
        Status: false,
        Error: "Query Error",
        err: err.sqlMessage,
      });
    else
      return res.json({
        Status: true,
        Message: "Emp Register successfully",
        result,
      });
  });
};

// ================ put api ===================//
const updateEmp = (req: Request, res: Response) => {
  const sqlQuery:string = `UPDATE emp SET image = ?, email = ? WHERE id = ?`;
  const id:string = req.params.id;
  const { image, email }: {image:string, email:string} = req.body;
  //   console.log(id);
  connection.query(sqlQuery, [image, email, id], (err: any, result: any) => {
    if (err)
      return res.json({
        Status: false,
        Error: "Query Error",
        err: err.sqlMessage,
      });
    else
      return res.json({
        Status: true,
        Message: "Emp updated successfully",
        result,
      });
  });
};

//=================   delete api ===================//
const deleteData = (req: Request, res: Response) => {
  let id:string = req.params.id;
  if (!id) {
    return res.json({ Status: false, Error: "ID is required" });
  }
  console.log(id);
  const sqlQuery:string = `DELETE FROM emp WHERE id = ?`;
  connection.query(sqlQuery, [id], (err: any, result: any) => {
    if (err)
      return res.json({
        Status: false,
        Error: "Query Error",
        err: err.sqlMessage,
      });
    else if (result.affectedRows === 0)
      return res.json({ Error: "id not found" });
    else
      return res.json({
        Status: true,
        Message: "Data deleted successfully",
        result,
      });
  });
};

module.exports = { getData, saveData, updateEmp, deleteData, getParamsData };
