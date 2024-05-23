const jwt = require('jsonwebtoken');

const createSessionId=(id)=>{
    const token = jwt.sign({id},process.env.JWT_SECRET);
    return token;
}

const verifySessionId=(token)=>{
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    return decoded;
}

module.exports = {createSessionId,verifySessionId};