import User from "../models/userModel.js"
import bcrypt from 'bcryptjs'

class UserController {
  async registerUser(req, res) {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        res.status(400).json({
          message: "please provide name, email and password",
        })
        return
      }
      const existingUser = await User.find({ email });
      if (existingUser.length > 0) {
        res.status(400).json({
          message: "User with this email already exists",
        })
        return
      }
      await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
      })
      res.status(201).json({
        message: "User created successfully",
      })

    } catch (error) {
      console.log(error)
    
    }
  }

  async loginUser(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        message: "Please provide email and password",
      });
      return;
    }
    const user = await User.find({ email });
    if (user.length == 0) {
      res.status(404).json({
        message: "This email is not registered",
      });
      return;
    }

    const isMatched = bcrypt.compareSync(password, user[0].password);
    if (isMatched) {
      res.status(200).json({
        message: "Login successful",
        user,
      });
    } else {
      res.status(400).json({
        message: "Invalid password!!!",
      });
    }
  }
}

export default new UserController()