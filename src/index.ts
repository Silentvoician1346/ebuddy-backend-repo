import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { initializeFirebaseApp } from "./config/firebaseConfig";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/userRoutes";

const { admin, db } = initializeFirebaseApp();
export const firebaseAdmin = admin;
export const firebaseDB = db;

dotenv.config();

const app: Express = express();
const port = process.env.BASE_PORT || 3002;

app.use(cors());
app.use(bodyParser.json());

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
