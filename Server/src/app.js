const express = require('express');
require('dotenv').config();
const router = require('./routes/auth.route');
const cookieParser = require('cookie-parser');
const cors = require("cors");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://synclife-1.onrender.com"
  ],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',router);


module.exports = app;
