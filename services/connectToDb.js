const {connect, set}=require('mongoose');

const connectToDb=async()=>{
    try{
        await connect(process.env.MONGO_URI);
        console.log("Connected to the database 🍪");
    }catch(err){
        setTimeout(connectToDb,10000);
    }
}

module.exports = {connectToDb};