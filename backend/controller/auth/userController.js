const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../model/userModel");

exports.registerUser = async (req, res) => {
  const { email, password, phoneNum, username } = req.body;
  if (!email || !password || !phoneNum || !username) {
    return res.status(400).json({
      message: "Please provide email, password , username & phoneNum",
    });
  }

  const userFound = await User.find({ userEmail: email });
  if (userFound.length > 0) {
    return res.status(400).json({
      message: "User with that email already exists",
    });
  }
  await User.create({
    email,
    userPassword: bcrypt.hashSync(password, 10),
    userPhoneNum: phoneNum,
    userName: username,
  });
  res.status(200).json({
    message: "User registered successfully",
  });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "Please provide email & password",
    });
  }
  const userFound = await User.find({ email: email });
  if (userFound.length == 0) {
    return res.status(400).json({
      message: "Please register with this email",
    });
  }
  const isMatched = bcrypt.compareSync(password, userFound[0].userPassword);
  const token = jwt.sign({ id: userFound[0]._id }, process.env.SECRET_KEY);
  if (isMatched) {
    res.status(200).json({
      message: "You are logged in successfully",
      data: userFound,
      token: token,
    });
  } else {
    res.status(400).json({
      message: "Invalid password",
    });
  }
};
