// Connect to Database

// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const mongoDBConnect = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`> MongoDB Connected to: ${mongoDBConnect.connection.host}`);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

require("dotenv").config();

// module.exports = { connectDB };

const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

module.exports = pool.promise();
