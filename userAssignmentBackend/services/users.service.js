let express = require("express");
const config = require("config");
let log4js = require("log4js");
const bcrypt = require("bcrypt");
let tokenService = require("./token.service");
let usersDao = require("../dao/users.dao");
const logger = log4js.getLogger("Users Service");
logger.debug("Banner Service Initiated");

module.exports = {
  createUser: createUser,
  loginUser: loginUser,
  listUsers1: listUsers1,
  deleteUser: deleteUser
};
//create user
async function createUser(userDetails, callback) {
  logger.debug("Initiated createUser");

  userDetails.password = encryptPassword(userDetails.password);
  logger.debug("Hash password : " + userDetails.password);

  let newUserDetails = await usersDao.insertOne(userDetails);
  if (newUserDetails && newUserDetails._id) {
    logger.debug("User created successfully : " + newUserDetails._id);
    callback(null, newUserDetails);
  } else {
    logger.error("Failed to create user : ");
    logger.error(newUserDetails);
    callback(newUserDetails, null);
  }
}

//delete user by id
async function deleteUser(userId, callback) {
  logger.debug("Initiated deleteUser");
  let deleteUserQuery = { _id: userId };
  logger.debug("delete id is : " + deleteUserQuery);

  let deleteUserDetails = await usersDao.deleteOne(deleteUserQuery);
  if (deleteUserDetails && deleteUserDetails._id) {
    logger.debug("User deleted successfully : " + userDelete.username);
    callback(null, deleteUserDetails);
  } else {
    logger.error("Failed to delete user : ");
    logger.error(deleteUserDetails);
    callback(deleteUserDetails, null);
  }
}


//password encrypt
function encryptPassword(plainTextPassword) {
  let saltRounds = config.get("saltRounds");
  const hashPassword = bcrypt.hashSync(plainTextPassword, saltRounds);
  return hashPassword;
}
//password compare
function comparePassword(plainTextPassword, hashPassword) {
  let isPasswordCorrect = bcrypt.compareSync(plainTextPassword, hashPassword);
  return isPasswordCorrect;
}

//Login user
async function loginUser(credentials, callback) {
  logger.debug("Initiated login User");
  let findUserQuery = { username: credentials.username };
  let userDetails = await usersDao.findOne(findUserQuery);
  if (userDetails && userDetails._id) {
    let isPasswordMatched = comparePassword(
      credentials.password,
      userDetails.password
    );
    if (isPasswordMatched) {
      logger.debug("User login successful : " + credentials.username);
      delete userDetails.password;
      let token = tokenService.createToken(userDetails);

      let response = {
        message: " login success ",
        user: userDetails,
        token: token,
      };

      callback(null, response);
    } else {
      logger.error("User login Failed : " + credentials.username);
      let error = new Error();
      error.message = "Invalid Credentials";
      callback(error, null);
    }
  } else {
    logger.error("User login Failed : " + credentials.username);
    let error = new Error();
    error.message = "Invalid Credentials";
    callback(error, null);
  }
}

//get list of all users
async function listUsers1(callback) {
  logger.debug("Initiated List all Users for Admin");
  let allUsers = await usersDao.find({});
  if (allUsers && allUsers.length > -1) {
    logger.debug("User list fetched successfully : " + allUsers.length);
    callback(null, allUsers);
  } else {
    logger.error("Failed to fetch all users : ");
    logger.error(allUsers);
    callback(allUsers, null);
  }
}
