const app = require('./src/app');
const ConnectDB = require('./src/db/db');



const port = process.env.PORT || 3000

async function Start(){
    try{
        await ConnectDB();
        app.listen(port,()=>{
            console.log(`Server is running on ${port}`)
        }
            
        );
    }catch(err){
        console.log("Connection to Server failed");
    }
}

Start();