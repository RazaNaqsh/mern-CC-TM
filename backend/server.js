import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";

const port = process.env.PORT || 4000;

const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is Ready!"));

app.listen(port, () => console.log(`Server started at port ${port}`));
