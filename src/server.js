const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")
const userRoutes = require("./routes/user.routes")

const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use(express.json())
app.use("/user",userRoutes )

module.exports = app
