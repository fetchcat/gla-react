CREATE DATABASE groceries;

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(128) UNIQUE NOT NULL,
  createdAT TIME NOT NULL,
);