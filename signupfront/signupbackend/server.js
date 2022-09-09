const express = require('express') 
const dotenv = require('dotenv') 
const mongoose = require('mongoose')  
const routesUrls = require('./routes/routes') 
const cors = require('cors') 

const app = express() 

dotenv.config() 

mongoose.connect(process.env.DATABASE_ACCESS,() => console.log("database connected"))


app.use(express.json()) 
app.use(cors()) 
app.use('/app',routesUrls) 
app.listen(4000,() => console.log('server is running')) 
