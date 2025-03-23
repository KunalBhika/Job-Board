import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDB from "./db.js";
import findRoute from "./routes/findRoute.js";
import path from "path";

const app = express();
const _dirname = path.resolve();

app.use(cors());
app.use(express.json());
dotenv.config();

connectToDB();

// Api route
app.use("/api/", findRoute);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(_dirname, "../frontend/dist")));
    app.use("*", (req, res) => {
        res.sendFile(path.join(_dirname, "../frontend", "dist", "index.html"));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App listening to PORT : ${PORT}`));