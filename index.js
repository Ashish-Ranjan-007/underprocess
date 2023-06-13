import { createRequire } from "module";
import express, { Router } from 'express';

// import router from './routes/userRoutes';
// import express, { Router } from 'express'; //changeds here 
const server = express()
const require = createRequire(import.meta.url);


// setting up env config file
require('dotenv').config()


server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static("views"))

// setting up ejs
server.set("view engine", "ejs")

// setting up routes
const userRoutes = require('./routes/userRoutes') // change here 
 

server.use('/', userRoutes)

// setting up socket.io
const { webSocket } = require("./socket") // changes here
const eserver = require('http').createServer(server)
webSocket(eserver)





eserver.listen(3000, () => {
  console.log("Server Status:OK")
})