"use strict";
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "typescript_crud",
    port: "3306",
});
connection.connect((err, result) => {
    if (err) {
        console.log(err.sqlMessage);
    }
    else {
        console.log(`Database connected`);
    }
});
module.exports = connection;
