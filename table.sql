CREATE DATABASE recipespoc;

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    ingredients TEXT NOT NULL,
   steps TEXT NOT NULL,
 cost FLOAT NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);
