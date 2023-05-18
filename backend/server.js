import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";

const port = 5000;
// const port = process.env.PORT || 5000;
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is Ready!"));
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started at port ${port}`));
