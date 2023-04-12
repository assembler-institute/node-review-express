const userRouter = require("express").Router()

const {signUp, getAllUsers} = require("../controllers/user.controllers")


userRouter
.post("/signup", signUp)
.get("/all", getAllUsers)

module.exports = userRouter