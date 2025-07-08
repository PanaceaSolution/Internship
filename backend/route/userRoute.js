const { default: userController } = require("../controller/userController")


const router = require("express").Router()

router.route("/signup").post(userController.registerUser)
router.route("/signin").post(userController.loginUser)



module.exports = router