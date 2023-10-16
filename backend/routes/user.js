const express = require('express');

const router = express.Router();
const {getAllUsers,createUser,getUser,updateUser,deleteUser} = require("../controllers/user");

router
.post('/', createUser)
.get('/', getAllUsers)
.get('/:id', getUser)
.put('/:id', updateUser)
.delete('/:id', deleteUser)


module.exports = router;
 