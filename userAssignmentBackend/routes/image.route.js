let express = require("express");
let router = express.Router();
let log4js = require("log4js");
const logger = log4js.getLogger("Image Routes");
let ImageData = require("../models/image.model");

const multer = require("multer");
const path = require("path");

logger.debug("Image Routes Initiated");

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({
  storage: storage,
});

router.post(
  "/createUserWithImage",
  upload.single("profile"),
  async (req, res) => {
    console.log(req.file);
    if (!req.body.username) {
      return res.status(400).send({
        message: "Required field can not be empty",
      });
    }
    const user = await ImageData({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      number: req.body.number,
      dob: req.body.dob,
      userid: req.body.userid,
      gender: req.body.gender,
      password: req.body.password,
      profile: req.file.originalname,
    });
    user.save();
    res.send(user);
  }
);

module.exports = router;
