let log4js = require("log4js");
let usersService = require("../services/users.service");
let UserData = require("../models/users.model");
let logger = log4js.getLogger("Users Controller");

module.exports = {
  createUser: createUser,
  loginUser: loginUser,
  listUsers1: listUsers1,
  deleteUser: deleteUser,
  updateUser: updateUser,
  getById: getById,
};
//create user
function createUser(req, res) {
  logger.debug("Inside createUser");
  let userDetails = req.body;
  console.log(req.body);
  usersService.createUser(userDetails, (err, result) => {
    if (err) {
      logger.error("Create User : " + err);
      res.status(500).send(err);
    } else {
      logger.debug("Success create User : " + result);
      res.status(200).send(result);
    }
  });
}

//update user
async function updateUser(req, res) {
  logger.debug("inside updateUser");
  try {
    const UPDATE_USER = await UserData.findOne({
      _id: req.params.id,
    });
    if (req.body.file) {
      UPDATE_USER.file = req.body.file;
    }
    if (req.body.username) {
      UPDATE_USER.username = req.body.username;
    }
    if (req.body.firstname) {
      UPDATE_USER.firstname = req.body.firstname;
    }
    if (req.body.lastname) {
      UPDATE_USER.lastname = req.body.lastname;
    }
    if (req.body.email) {
      UPDATE_USER.email = req.body.email;
    }
    if (req.body.number) {
      UPDATE_USER.number = req.body.number;
    }
    if (req.body.dob) {
      UPDATE_USER.dob = req.body.dob;
    }
    if (req.body.userid) {
      UPDATE_USER.userid = req.body.userid;
    }
    if (req.body.gender) {
      UPDATE_USER.gender = req.body.gender;
    }
    if (req.body.role) {
      UPDATE_USER.role = req.body.role;
    }
    UPDATE_USER.save();
    logger.debug(req.body.username + " user updated successfully ");
    res.status(200).send({
      Message: "user updated sucessfully",
    });
  } catch {
    res.status(404);
    res.send({
      error: "user not updated ",
    });
  }
}

//getById
async function getById(req, res) {
  logger.debug("Inside getByIdUser");
  try {
    const user = await UserData.findOne({
      _id: req.params.id,
    });
    res.send(user);
  } catch {
    res.status(404);
    res.send({
      error: "user doesn't exist!",
    });
  }
}
async function deleteUser(req, res) {
  logger.debug("Inside delete user");
  try {
    const user = await UserData.deleteOne({
      _id: req.params.id,
    });
    res.send(user);
  } catch {
    res.status(404);
    res.send({
      error: "user not deleted!",
    });
  }
}

//login user
function loginUser(req, res) {
  logger.debug("Inside loginUser");
  let userCredentials = req.body;
  usersService.loginUser(userCredentials, (err, result) => {
    if (err) {
      logger.error("Login User : " + err);
      res.status(500).send(err);
    } else {
      logger.debug("Success Login User : " + result);
      res.status(200).send(result);
    }
  });
}
//list of all user
function listUsers1(req, res) {
  logger.debug("Inside List Users");
  usersService.listUsers1((err, result) => {
    if (err) {
      logger.error("List 1 Users : " + err);
      res.status(500).send(err);
    } else {
      logger.debug("Success List Users : " + result.length);
      res.status(200).send(result);
    }
  });
}
