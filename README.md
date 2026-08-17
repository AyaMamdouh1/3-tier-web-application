# 3-Tier Web Application

A simple 3-Tier Web Application built using **HTML, CSS, JavaScript, Bootstrap, PHP, Nginx, PHP-FPM, and MySQL on Linux System.

The project demonstrates how a web application can be deployed across separate Client, Web Server, and Database Server machines.

# Project Overview

This project follows a "3-Tier Architecture":

                 Client
                   |
                   | HTTP Request
                   ↓
          ┌──────────────────┐
          │    Web Server    │
          │      Nginx       │
          │     PHP-FPM      │
          └────────┬─────────┘
                   |
                   | MySQL Connection
                   ↓
          ┌──────────────────┐
          │   Database       │
          │     MySQL        │
          └──────────────────┘

# Tiers

1. Client Tier

2. Web Server Tier

* Ubuntu Linux
* HTML,Bootstrsp,JavaScript
* Nginx
* PHP
* PHP-FPM

3. Database Tier

* MySQL

# Features

* Display products from a MySQL database.
* Filter products by category.
* Dynamic data loading using JavaScript `fetch()`.
* PHP backend APIs.
* MySQL database integration.
* Nginx web server configuration.
* PHP-FPM for processing PHP requests.
* Remote connection between the Web Server and Database Server.
* Three separate virtual machines representing the application tiers.


# Technologies Used

 Technology    | Purpose                 
 ------------  | ----------------------- 
 Ubuntu Linux  | Server Operating System 
 Nginx         | Web Server              
 PHP           | Backend                 
 PHP-FPM       | PHP Processing          
 MySQL         | Database                
 JavaScript    | Dynamic Frontend        
 HTML          | Page Structure          
 Bootstrap     | Responsive UI           
 Git & GitHub  | Version Control         


# Project Structure

3-tier-web-application/
├── index.html
├── products.php
├── DB.php
├── script.js
├── nginx.conf
├── queries.sql
├── README.md
│
└── screenshots 


# Database

The application uses a MySQL database containing product information.

Example categories:

* Mobiles
* Laptops
* Ipads

The PHP backend retrieves products from MySQL based on the selected category.

Example request:

products.php?category=Mobiles

# Application Flow

User selects a category
        ↓
JavaScript sends fetch() request
        ↓
products.php receives the category
        ↓
PHP connects to MySQL
        ↓
MySQL returns matching products
        ↓
PHP returns JSON
        ↓
JavaScript displays the products

# Configure Nginx

Place the project inside:
/var/www/mywebsite/

# Testing

The application can be tested from a client machine by opening:

http://WEB-SERVER-IP:Port

The client sends requests to the Web Server, and the Web Server communicates with the Database Server.

# Learning Objectives

This project was created to practice:

* Linux Server Administration
* Nginx Configuration
* PHP-FPM
* MySQL Administration
* Client/Server Architecture
* 3-Tier Architecture
* Networking Between Virtual Machines
* Firewall and Port Configuration
* SSH
* Git and GitHub
* Basic Web Application Deployment

# Author

 Aya El Gendy

Linux / Technical Support / System Adminstrator
