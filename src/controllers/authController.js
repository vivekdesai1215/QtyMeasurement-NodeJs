const authService = require("../services/authService");

exports.register = async (req,res)=>{
    try{
        const {name,email,password} = req.body;

        await authService.registerUser(
            name,
            email,
            password
        );

        res.json({
            message:"User registered successfully (Jenkins Successful)"
        });

    }catch(error){
        res.status(400).json({
            error:error.message
        });
    }
};

exports.login = async (req,res)=>{
    try{
        const {email,password}=req.body;

        const token = await authService.loginUser(
            email,
            password
        );

        res.json({token});

    }catch(error){
        res.status(400).json({
            error:error.message
        });
    }
};