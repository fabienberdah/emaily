const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Emaily");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
