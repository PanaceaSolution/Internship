const { default: mongoose } = require("mongoose")


exports.connectDatabase = async () => {
    await mongoose.connect(process.env.CONNECRION_STRING)
    console.log("Database Connected Successfully")
}

