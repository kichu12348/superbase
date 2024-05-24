const fs = require('fs');
const path = require('path');

const errorLog = (err)=>{
    fs.appendFile(path.resolve('./_logs/error.txt'),`\n${new Date()}: ${err}`,  (err)=>{
        if (err){
          console.log(err);
        };
      });
}

module.exports = {errorLog};