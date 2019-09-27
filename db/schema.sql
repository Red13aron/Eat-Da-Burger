-- Drops the burger_db if it exists currently --
DROP DATABASE IF EXISTS burger_db;
-- Creates the "burger_db" database --
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers
(
    id int not null AUTO_INCREMENT,
    name VARCHAR(255) not null,
    devoured boolean DEFAULT false,
    PRIMARY KEY(id)
)