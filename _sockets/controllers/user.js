const {createSessionId} = require('../../services/Auth');
const User = require('../models/user');
const crypto = require('crypto');




async function signUp(req, res) {
    try{
        const {username, email, password} = req.body;
        const doesUserExist = await User.findOne({email})
        if(doesUserExist){
            return res.json({message:"User already exists",ok:false});
        }
        const salt = crypto.randomBytes(32).toString('hex');
        const hashedPassword= crypto.createHmac("sha512",salt).update(password).digest("hex");
        const newUser = await User.create({
            email,
            username,
            password:hashedPassword,
            salt,
        })

        const sessionId = createSessionId(newUser._id.toString());
        return res.json({
            message:"User created successfully",
            ok:true,
            sessionId
        });
        
    }catch(err){
        console.log(err);
        return res.json({message:"Internal Server Error",ok:false});
    }
}