const express = require("express");
const keys = require("./config/keys");

require("./models/User");
require("./services/passport");
const mongoose = require("mongoose");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

const app = express();
require("./routes/authRoutes")(app);

app.get("/", (req, res) => {
  res.send("Welcome to Emaily");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
