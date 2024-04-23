# Tutorial to build a full-stack ToDo CRUD application

### Application was built using a YouTube tutorial and is meant for instructional purposes only
https://www.youtube.com/watch?v=ldYcgPKEZC8

## The purpose of this tutorial is to learn the steps involved in building both ends of a full-stack application with read, write, edit and delete functionality

# Instructions & Documentation
 1. Build the Server
    - Create a 'server' folder. Navigate inside the folder and run 'npm init'
    - Install express, postgresql and cors dependencies
    - Create index.js file, then:
       - Begin with setting up requirements for express, app and cors dependencies
       - Set up the port for the server to listen on
       - Start the server using command "node index" to make sure server is running
       - Install nodemon dependency
       - Restart the server using command "nodemon index" (This will automatically restart the server after a change in the server code)
       - Set up the middleware to be used (
            'app.use(cors())'
            'app.use(express.json())
        )
 2. Build Postgres Database & Table
    - Create database.sql file inside server folder (Commands to create database & tables will be stored here for easy reading and use)
    - Create database perntodo in SQL Shell
    - Navigate to perntodo database and create todo table
 3. Connect PostgreSQL Database And Server
    - Create file db.js to configure how the server connects to the database
    - In the db.js file, create the connection to the database by creating a new Pool with the following information: User, Password, Host, Port & Database name
    - Additionally, you can add a gitignore file to prevent sensitive information from being available in the online repository
    - Import the db file into the index
 4. Build Routes With Postgres Queries
    - Start building routes to Create, Get (all & single), Update and Delete ToDos
    - Use async / await functions to speed up the experience
    - Always use a try / catch function to catch errors
    