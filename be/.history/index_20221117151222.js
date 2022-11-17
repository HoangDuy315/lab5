import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Cards from "./dbCards.js";

const app = express();
const port = process.env.PORT || 4000;
const connection_url =
  "mongodb+srv://gnahyud:gnahyud@cluster0.9zswyqe.mongodb.net/lab5?retryWrites=true&w=majority";

//middleware
app.use(express.json());
app.use(Cors());

//db config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
