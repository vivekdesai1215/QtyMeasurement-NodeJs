const jwt = require("jsonwebtoken");

function authenticate(req,res,next){
    try{
        const authHeader = req.headers.authorization;
        if(!authHeader){
            throw new Error("Token required");
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        req.user = decoded;
        next();
        
    }catch(error){
        res.status(401).json({
            error:"Unauthorized access"
        });
    }
}

module.exports = authenticate;