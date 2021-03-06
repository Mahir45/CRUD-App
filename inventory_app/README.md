##  Inventory Tracker CRUD-Nodejs-PostgreSQL
This repository contains a simple Application explaining CRUD operations using PostgreSQL as database and Nodejs on the backend.

Environment Setup
To run this project, make sure you have the following installed on your system.

1: Visual Studio Code

2: PostgreSQL

3: Nodejs

Before moving forward, confirm the NodeJs installing by checking its version with the 'node -v' command. Also check that you have NPM installed with the 'npm -v' command. Next, check the installation of PostgreSQL database with 'postgres --version' command and check that its running with 'psql --version' command.

Creating Database
You can either create a database using pgAdmin or straight up use raw SQL. pgAdmin comes with an easy to follow UI. In order to create database using raw SQL queries, all you need to do is to do is connect to Postgres using 'psql -U postgres' command. Later, you can execute SQL queries from within terminal. e.g.

Connecting to PostgreSQL: psql -U postgres

Creating testdb Database: CREATE DATABASE testdb;

Connecting to recently created Database: \c testdb

Create Table:

run this command from the root folder once you have sucessfully created the database

* \i inventory_app/db/migrations/01_schema.sql 


### This creates the tables

* \i inventory_app/db/seeds/seeds.sql 


### Inserts the seeds into the tables



Connecting to Database
Once you've created the database, change the following credentials in the  as per your database. 

const { pool } = require('pg');
const db = new Pool({
  user:
  host: 
  database: 
  port: 
});
db.connect()


Running the Application
Use the commane 'npm start' after installing all of the required dependancies 

To run the application, move to the source folder i.e. the folder contains 'package.json' file and execute npm install

The source folder also contains 'app.js' file. Execute node app.js to run the application.

If everything goes well, you should see 'server started on port 3000'. Move to (http://localhost:3000/) in default browser.