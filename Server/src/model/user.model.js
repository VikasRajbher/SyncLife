const mongoose = require('mongoose');
const{ validateEmail, validatePassword, validateName, validateAllowedDomain } = require('../validators/auth.validator')


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        validate:{
            validator:validateName,
            message: props => `${props.value} is not a valid name! Only letters and spaces allowed (3-20 chars)`
        }   
    },
    email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: [
      { validator: validateEmail, message: "Invalid email format" },
      { validator: validateAllowedDomain, message: "Email domain not allowed" },
    ],
  },
    password:{
        type:String,
        required:true,
        trim:true,
        validate:{
            validator:validatePassword,
            message:"Password must be at least 6 characters and contain a number"
        }
    }
},{timestamps:true});


const userModel = mongoose.model('user', userSchema);

module.exports = userModel;