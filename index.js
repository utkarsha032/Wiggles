const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
//const mongoose = require("mongoose");
const routes = require("./routes");

require("dotenv").config();

const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_LINK,
    credentials: true,
  })
);


/*mongoose.connect(`mongodb+srv://${process.env.DB_CONNECTION_STRING}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});*/


app.use("/", routes);

app.listen(3001, () => {
  console.log("Visit the website at: http://localhost:3001");
});