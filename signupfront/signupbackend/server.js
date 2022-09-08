const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { mongo, default: mongoose } = require('mongoose');
const routesUrls = require('./routes/routes');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS,() => console.log("database connected"))


app.use(express.json());
app.use(cors);
app.use('/app',routesUrls);
app.listen(3000,() => console.log('server is running'));
