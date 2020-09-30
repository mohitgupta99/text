const express = require("express");
const router = express.Router();

//get user credentials
const{getUserById,getUser} = require("../controllers/user");
const{isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth");

//importing all users
const{getAllUsers} = require("../controllers/user");

router.param("userId", getUserById);

//checking
router.get("/user/:userId", isSignedIn,isAuthenticated,getUser);

//assignment
router.get("/users",getAllUsers)

//export the function
module.exports = router;


