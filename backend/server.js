// ENV

require("dotenv").config();

const PORT = process.env.PORT || 5000;

// Express

const express = require("express");
const app = express();

const itemRoutes = require("./routes/itemRoutes");

// Middleware

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });
}

app.listen(PORT, () => {
  console.log(`> GLA-React Backend Listening on port ${PORT}...`);
});

// Routes

app.use("/api/items", itemRoutes);
