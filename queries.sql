mysql -u root

CREATE DATABASE stores;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(10,2)
);

INSERT INTO products (name, category, price)
VALUES ('iPhone 15', 'Mobiles', 40000);


SHOW DATABASES;

USE your_database;


SHOW TABLES;


DESCRIBE your_table;


SELECT * FROM products
