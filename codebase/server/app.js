const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const errorMiddleware = require("./middleware/error");


const app = express();
app.use(cors({
    origin: 'http://localhost:3001'
  })); // Allow all origins by default


//middleware to parse json
app.use(express.json());

//middleware to parse cookie
app.use(cookieParser());

//Route imports

app.use("/api/v1",require("./routes/productRoute"));
app.use("/api/v1",require("./routes/userRoutes"));
app.use("/api/v1",require("./routes/orderRoute"));

//middleware for errors
app.use(errorMiddleware);

module.exports = app;