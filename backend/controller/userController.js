import User from "../models/userModel"

class UserController{
    async registerUser (req,res){
        const {name, email, password} = req.body
        if(!name || !email || !password){
            res.status(400).json({
                message: "All fields are required"
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

    async loginUser  (req, res){
        const {email, password} = req.body
        if(!email || !password){
            res.status(400).json({
                message: "All fields are required"
            })
            return 
        }
        const user = await User.find({email})
        if(user.length == 0){
            res.status(404).json({
                message: "User not found"
            })
            return 
        }
        if(user.password !== password){
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