const express = require('express')
const cors = require("cors")
require('dotenv').config()
const { connectDatabase } = require('./database/database')

const userRoute = require('./route/userRoute')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(cors({
    origin : '*'
}))

connectDatabase()
app.get("/",(req,res)=>{  
    res.status(200).json({
    message : "Backend in Live"
    })
})


app.use('/user', userRoute)



const PORT = process.env.PORT || 5000
app.listen(PORT ,()=>{
    console.log("Server is running on port 5000")
})

