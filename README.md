# Tutorial to build a full-stack ToDo CRUD application

### Application was built using a YouTube tutorial and is meant for instructional purposes only
https://www.youtube.com/watch?v=ldYcgPKEZC8

## The purpose of this tutorial is to learn the steps involved in building both ends of a full-stack application with read, write, edit and delete functionality

# Instructions & Documentation

## Back-End Configuration

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
    
## Front-End Configuration

 5. Set Up Client Side
    - In your command prompt (or Git Bash), back out of the server folder and run "npx create-react-app client" to build the React front-end application.
    - Application will have three main components: 
       - Input component
       - Component to show all todos
       - Modal editing component
   - Clean up unnecessary files & components inside src folder from initial build
       - App.test.js
       - logo.svg
       - serviceWorker.js / reportWebVitals.js
       - setupTests.js
   - Clean up unnecessary code in index.js & App.js files
   - Import {Fragment} into App.js file, remove all code in the return and begin with a Fragment component
   - Create Components folder to house the component files:
       - InputTodo.js
       - ListTodos.js
       - EditTodo.js
   - Install Bootstrap 4
       - Copy CSS code from Bootstrap 4 page, paste into public -> index.html file under the manifest link
       - Copy the JS code from Bootstrap 4 page, pase into public -> index.html at the end of the body section
 6. Building the Input ToDo Component
    - Build initial component using rafce
    - Import component into the App.js file inside a 'container' div inside the Fragment
    - Import Fragment into the InputTodo.js file
    - Add the component title inside the Fragment
    - Add & style a form for new submissions:
        - Input box
        - Submit button 
   - Add useState hook to component and build state setups to set the input value
   - Build the async/await function to submit the data to the database using a try / catch block
 7. Build the List ToDo Component
    - Build the initial component using rafce
    - Import component into App.js file & add under the InputTodo component
    - Import Fragment into the List ToDo Component
    - Return the component with a Fragment and place the Bootstrap 4 table into the Fragment (copy & paste from w3schools page)
    - Change the information in the table to match what will be displayed in the screen
    - Import useEffect & useState
    - Create getTodos try/catch function and add it to useEffect to take place every time the page renders
    - Once you confirm you are fetching the data, map it in the table
    - Add Edit & Delete text to the table for each line item
 8. Build the Delete Button
    - In the ListTodos component, replace the "Delete" text with a Delete button and style it
    - Add a key under the <tr> element that will be unique - In this case, we use the todo_id for each todo item
    - Add an onClick event handler to delete the todo from the table
    - Build function to take the todo id as an argument and delete that item from the table
    - Add a filter function at the end to refresh the page with the new data - The filter should only show the items whose id's DO NOT match the id of the item to be deleted
 9. Build the Edit ToDo Component
    - Build the initial component using rafce
    - Import component into the ListTodos component
    - Add EditTodo component to the table in the map area of the ListTodos component, between the item description and the Delete button
    - Import the Fragment hook into the component and use it as the main div
    - Copy code for a modal from W3schools (Google search w3schools bootstrap 4 modal) and paste into the component inside the Fragment
    - Change the default content to fit the component and add a second "Edit" button inside the modal
    - Add the prop to the EditTodo component inside the ListTodos component and add the same component to the EditTodo component
    - Import useState hook to keep track of the todo you are editing
    - Assign a unique ID to each modal instance by using the ID of each todo
    - Add onChange hook to the modal to setDescription whenever text is updated
    - Add onClick to the Update button to update todo to the new description
    - Add "window.location = '/' " to refresh the page when the item is updated
    - Add onClick function to the X on the modal to reset the description back to the original description (when you choose not to edit)
    - Add functionality to other buttons as well, including the Close button and the main div for the mocal, under the id (this last instance is for clicking outside the modal to close it)