const express = require("express");
const router = express.Router();

//get user credentials
const{getUserById,getUser} = require("../controllers/user");
const{isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth");

//assignment
const{getAllUsers} = require("../controllers/user");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn,isAuthenticated,getUser);

//assignment
router.get("/users",getAllUsers)

//export the function
module.exports = router;


