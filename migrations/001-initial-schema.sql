-- Up

CREATE TABLE Message (
  id INTEGER PRIMARY KEY,
  text STRING
);

CREATE TABLE User (
  id INTEGER PRIMARY KEY,
  name STRING,
  email STRING UNIQUE,
  passwordHash STRING
);

-- Down

DROP TABLE Message;
DROP TABLE User;
