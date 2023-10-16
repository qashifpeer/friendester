const User = require("../models/user");

// create new user

const createUser = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ message: "All feilds required" });
    }
    const newUser = { email: req.body.email, password: req.body.password };
    const user = await User.create(newUser);
    return res
      .status(201)
      .json({ message: "user created successfully", users: user });
  } catch (error) {
    console.log(error);
  }
};

// get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length) {
      return res.status(201).json(users);
    } else {
      console.log("no users found");
    }
  } catch (error) {
    console.log(error);
  }
};

// get single user
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await User.findById(id);
    console.log(user);
    if (user) {
      return res.status(200).json({ message: "user found", users: user });
    } else {
      return res.status(501).json({ message: "user not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

// update user
const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id,req.body);
        if(!user){
            return res.status(404).json({message:"user not found"});
        }
        return res.status(200).send({message: "email updated"})

        
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
}

//delete user
const deleteUser = async(req, res) => {
    try {
        const {id} = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if(!deletedUser){
            return res.status(404).json({message:  "User not found"})
        }
        res.status(200).send({message:"user deleted successfully"});
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
}


module.exports = {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser
};
