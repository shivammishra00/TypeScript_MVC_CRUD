const mysql = require("mysql");

export const connection: any = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "typescript_crud",
  port: "3306",
});
connection.connect((err: any, result: any) => {
  if (err) {
    console.log(err.sqlMessage);
  } else {
    console.log(`Database connected`);
  }
});

