import app from './src/app.js';
import ConnectDB from './src/db/db.js'

const port = process.env.PORT  || 3000

async function start(){
        await ConnectDB();
        app.listen(port,()=>{
                console.log(`Server is running on ${port}`)
        })
}

start();