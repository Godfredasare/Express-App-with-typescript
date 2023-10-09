import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";

import student from "./routes/student";

const app: Express = express();
const PORT = 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017/Practice")
  .then(() => console.log("connected to DB successfully"))
  .catch((e) => console.log("error connecting to DB", e));


app.use(express.json()); // for parsing application/json
app.use("/api/home", student);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
