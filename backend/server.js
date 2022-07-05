// ENV

require("dotenv").config();
const PORT = process.env.PORT || 5000;

const pool = require("./config/db");

// Express

const express = require("express");
const app = express();

const itemRoutes = require("./routes/itemRoutes");

// MongoDB

// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     // Indicate if MongoDB connected
//     console.log("> Connected to MongoDB Database!");
//     // If connection successful, then Listen
//     app.listen(PORT, () => {
//       console.log(`> GLA-React Backend Listening on port ${PORT}...`);
//     });
//   } catch (error) {
//     // If connect fails, log
//     console.log("Failed to connect to MongoDB: ", error);
//   }
// };

// connectDB();

// Middleware

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });
}

app.get("/", async (req, res) => {
  const query = "SELECT * FROM items";
  pool.query(query, (error, results) => {
    if (error) {
      res.status(400).json({ error: "Invalid request" });
    }
    if (results) {
      console.log(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`> GLA-React Backend Listening on port ${PORT}...`);
});
// Routes

app.use("/api/items", itemRoutes);
