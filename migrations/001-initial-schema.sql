-- Up

CREATE TABLE Message (
  id INTEGER PRIMARY KEY,
  text STRING
);

CREATE TABLE User (
  id INTEGER PRIMARY KEY,
  username STRING,
  password STRING
);

-- Down

DROP TABLE Message;
DROP TABLE User;
