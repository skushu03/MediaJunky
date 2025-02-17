import axios from "axios";
import express from "express";
// const dotenv = require("dotenv");
// import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());

// https: app.get("/api/statscurrent", async (req, res) => {
//})

app.use(express.static("dist"));

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./dist/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server port", PORT);
});
