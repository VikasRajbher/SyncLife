const express = require("express");
const cookieparser = require('cookie-parser');
require('dotenv').config();


const app = express();

app.use(cookieparser());



module.exports = app;