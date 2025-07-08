const express = require("express");
const mongos=require("mongoose");
const cors=require("cors");
const authRoutes = require("./routers/authRoutes");
const moviesRoutes = require("./routers/moviesRoutes");
const {logRequest}=require("./middleware/logger");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(logRequest);
app.use("/", authRoutes);
app.use("/movies", moviesRoutes);

mongos.connect("mongodb://localhost:27017/Firstdb").then(()=>{
  console.log("db connected");
});
app.listen(process.env.PORT, () => {
  console.log(`App is listening at port ${process.env.PORT}`);
});
