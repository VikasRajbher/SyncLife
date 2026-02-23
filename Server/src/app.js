const express = require('express');
require('dotenv').config();
import router from './routes/auth.route'

const app = express();

app.use(express.json());

app.use('/api/auth',router);


module.exports = app;
