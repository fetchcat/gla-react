require("dotenv").config();

const mysql = require("mysql2/promise");

const dbSocketPath = process.env.DB_SOCKET_PATH || "/cloudsql";

const pool = mysql.createPool({
  // host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  socketPath: `${dbSocketPath}/${process.env.INSTANCE_CONNECTION_NAME}`,
});

module.exports = pool;
