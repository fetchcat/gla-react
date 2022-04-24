require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("build"));

app.get("/", (req, res) => {
  res.send("GLA-React");
});

app.listen(port, () => {
  console.log(`> GLA-React frontend listening on port: ${port}`);
});
