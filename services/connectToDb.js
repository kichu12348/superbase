const {connect, set}=require('mongoose');
const {errorLog} = require('./errorLog');

const connectToDb=async()=>{
    try{
        await connect(process.env.MONGO_URI);
        console.log("Connected to the database 🍪");
    }catch(err){
        errorLog(err);
        setTimeout(connectToDb,10000);
    }
}

module.exports = {connectToDb};