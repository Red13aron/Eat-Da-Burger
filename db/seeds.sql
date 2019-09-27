-- INSERT INTO table_name (column1, column2, column3, ...)
-- VALUES (value1, value2, value3, ...);
USE burger_db;

INSERT INTO burgers (name, devoured, createdAt, updatedAt) VALUES ("Bacon Cheeseburger", true, CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO burgers (name, devoured, createdAt, updatedAt) VALUES ("Vegan Burger", false, CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO burgers (name, devoured, createdAt, updatedAt) VALUES ("Bourbon Burger", false, CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO burgers (name, devoured, createdAt, updatedAt) VALUES ("Mushroom Swiss", false, CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO burgers (name, devoured, createdAt, updatedAt) VALUES ("The Works", true, CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
