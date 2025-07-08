import User from "../models/userModel.js"

class UserController{
    async registerUser (req,res){
        const {name, email, password} = req.body
        if(!name || !email || !password){
            res.status(400).json({
                message: "please provide name, email and password"
            })
            return 
        }
        const existingUser = await User.find({email})
        if(existingUser.length > 0){
            res.status(409).json({
                message: "User with this email already exists"
            })
            return
        }
        await User.create({
            name,
            email,
            password
        })
        res.status(201).json({
            message: "User created successfully"
        })

    }

    async loginUser(req, res){
        const {email, password} = req.body
        if(!email || !password){
            res.status(400).json({
                message: "Please provide email and password"
            })
            return 
        }
        const user = await User.find({email})
        if(user.length == 0){
            res.status(404).json({
                message: "This email is not registered"
            })
            return 
        }
        // console.log(user[0].password)
        if(user[0].password != password){
            res.status(401).json({
                message: "Invalid password"
            })
            return 
        }
        res.status(200).json({
            message: "Login successful",
            user
        })


    }

    
}

export default new UserController()