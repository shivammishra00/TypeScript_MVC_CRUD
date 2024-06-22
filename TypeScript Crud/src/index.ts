import express, { Request, Response } from "express"; // step 1
const bodyParser = require("body-parser");
const dotenv = require('dotenv');


const app = express(); //step 2


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();


//////=========== Routes ============///
const empRouter = require('./Routes/empRoute/empRoute.ts')
app.use("/", empRouter)


//============================================//
const port: string | undefined  = process.env.PORT;         // step 3

app.listen(port, () => {                 // step 4
  console.log(`server is running on port${port}`);
});
