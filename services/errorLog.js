const fs = require('fs');


const errorLog = async(err)=>{
    fs.appendFile('error.log', err, function (err) {
        if (err) throw err;
      });
}