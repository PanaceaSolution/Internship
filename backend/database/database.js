const { default: mongoose } = require("mongoose")

exports.connectDatabase = async () => {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Database Connected Successfully")
}

