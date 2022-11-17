const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");
// import Cards from "./dbCards.js";

const app = express();
dotenv.config({ path: "./config.env" });
require("./db/conn");
const port = process.env.PORT;

//middleware
app.use(express.json());
app.use(Cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Nguyễn Hoàng Duy-19521425");
});

app.listen(port, () => {
  console.log("Server is Started");
});
