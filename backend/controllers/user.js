const User = require('../models/user');

const createUser = async (req, res) => {
    try {
        if(!req.body.email || !req.body.password){
            return res.status(400).json({message:"All feilds required"})
        }
        const newUser = {email:req.body.email, password:req.body.password};
        const user = await User.create(newUser);
        return res.status(201).json({message: "user created successfully", users: user});
        
    } catch (error) {
        console.log(error)
    }
}
const getAllUsers = async(req,res)=>{
    try {
        const users = await User.find({});
        if(users.length){
            return res.status(201).json(users);
        }else{
            console.log("no users found")
        }
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllUsers,
    createUser
    
}