"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection = require("../../Model/dbConfig.ts");
////======= get api =======//
const getData = (req, res) => {
    let sqlQuery = `SELECT * FROM emp`;
    connection.query(sqlQuery, (err, result) => {
        if (err)
            return res.json({
                Status: false,
                Error: "Query error",
                error: err.sqlMessage,
            });
        else
            return res.json({ Status: true, result });
    });
};
///=============  get data by params =============//
const getParamsData = (req, res) => {
    const id = req.params.id;
    if (!id)
        return res.json({ Message: "Data is required" });
    console.log(id);
    const sqlQuery = `SELECT * FROM emp WHERE id = ?`;
    connection.query(sqlQuery, [id], (err, result) => {
        if (err)
            return res.json({
                Status: false,
                Error: "Query error",
                err: err.sqlMessage,
            });
        else if (result.affectedRows === 0)
            return res.json({ Message: "Id not found" });
        else
            return res.json({ Status: true, result });
    });
};
// ============ post api ============//
const saveData = (req, res) => {
    console.log(req.body);
    const sqlQuery = `INSERT INTO emp SET ?`;
    const data = {
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        email: req.body.email,
        password: req.body.password,
    };
    if (!data)
        return res.json({ Error: "Data is Required" });
    connection.query(sqlQuery, [data], (err, result) => {
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
const updateEmp = (req, res) => {
    const sqlQuery = `UPDATE emp SET image = ?, email = ? WHERE id = ?`;
    const id = req.params.id;
    const { image, email } = req.body;
    //   console.log(id);
    connection.query(sqlQuery, [image, email, id], (err, result) => {
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
const deleteData = (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.json({ Status: false, Error: "ID is required" });
    }
    console.log(id);
    const sqlQuery = `DELETE FROM emp WHERE id = ?`;
    connection.query(sqlQuery, [id], (err, result) => {
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
