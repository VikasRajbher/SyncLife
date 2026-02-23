const express = require('express');
import authController from '../controllers/auth.control';
import {protect} from '../middlewares/auth.middleware';

const router = express.Router();


router.post('/register', authController.register);

router.post('/login', authController);




module.exports = router;