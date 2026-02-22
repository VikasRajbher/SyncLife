const mongoose = require('mongoose');


async function ConnectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB");
    }
    catch(err){
        console.log("Connection to DB failed");
        process.exit(1);
    }
};


module.exports = ConnectDB;