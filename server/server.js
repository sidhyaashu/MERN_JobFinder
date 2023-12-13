import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import mongoose from "mongoose"
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
// import { jobs, companies, users } from "./utils/data.js";
import dbConnection from "./database/dbConnection.js";
import router from "./routes/index.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
// import x from "./models/index.js"
// import Companies from "./models/companiesModel.js"
// import Users from "./models/userModel.js";
// import Jobs from "./models/jobsModel.js";


dotenv.config();

const app = express();

const PORT = process.env.PORT || 8800;

// MONGODB CONNECTION
dbConnection();

// middlenames
app.use(cors());
app.use(xss());
app.use(mongoSanitize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(morgan("tiny"));

app.use(router);

//error middleware
app.use(errorMiddleware);

// Companies.insertMany(companies);
// Users.insertMany(users);
// Jobs.insertMany(jobs);


mongoose.connection.once("open", ()=>{
  app.listen(PORT, () => {
    console.log(`Dev Server running on port: ${PORT}`);
  });
})

