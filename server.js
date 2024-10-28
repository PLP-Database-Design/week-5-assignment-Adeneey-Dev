//import our dependencies
const express = require("express")
const app = express()
const mysql = require('mysql2');
const dotenv = require('dotenv');


//configure environment variables
dotenv.config();

//create a connection object
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME 
})

console.log(db)
//test the connection
db.connect((err) => {
  // connection is not successful
  if (err) {
    return console.log("Error connecting to the database:", err)
  }

  // connection is successful
  console.log("successfully connected to Mysql:", db.threadId)
})


//this is not important for the assignment
//app.set('view engine', 'ejs');
//app.set('views', _dirname + '/views');

//GET
//POST
//PUT
//DELETE

//retrieve all patients
app.get('', (req, res) => {
  const getPatients = "SELECT first_name, last_name FROM patients"
  db.query(getPatients, (err, data) => {
    //if I have error
    if(err) {
      return res.status(400).send("Failed to get patients", err)
    }
 
    //res.status(200).render('data', { data })
    res.status(200).send(data)
  })
})
 



//basic endpoint to say Hello world
//app.get ('', (req, res) => {
  //res.send("Hello World, Allan is writing some code")
//})


//start and listen to the server
app.listen(3300, () => {
  console.log('server is running on port 3300....')
})