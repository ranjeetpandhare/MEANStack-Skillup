let express = require("express");
let router = express.Router();
let log4js = require("log4js");
const logger = log4js.getLogger("Users Routes");
let usersInterceptor = require("../interceptors/users.interceptor");
let usersController = require("../controllers/users.controller");

logger.debug("Users Routes Initiated");


//create new user
router.post("/", usersInterceptor.createUser, usersController.createUser);

//login new user
router.post("/login", usersInterceptor.loginUser, usersController.loginUser);

//get all user list
router.get("/list1", usersController.listUsers1);

//delete user by id
 router.delete("/:id", usersController.deleteUser);

 //update user
 router.put("/:id",usersController.updateUser);

 router.get("/:id",usersController.getById);



module.exports = router;
