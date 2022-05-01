const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

const itemRoutes = require("./routes/itemRoutes");

// --- ENV --- //

require("dotenv").config();

const port = process.env.PORT || 5000;
const server = process.env.SERVER;
const database = process.env.DB;
const env = process.env.NODE_ENV;

// --- Connect to MongoDB, then start Express --- //

const startBackend = async () => {
  try {
    await mongoose.connect(`${server}/${database}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`> Connected to database`);
    app.listen(port, () => {
      console.log(`> Server is listening on port: ${port}...`);
    });
  } catch (error) {
    console.error("> Error connecting to DB", error);
  }
};

startBackend();

// --- Routes --- //

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (env === "development") {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );
}

app.use("/item", itemRoutes);
