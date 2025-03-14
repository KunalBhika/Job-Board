import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDB from "./db.js";

const app = express();

app.use(cors());
dotenv.config();

connectToDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => console.log(`App listening to PORT : ${PORT}`));