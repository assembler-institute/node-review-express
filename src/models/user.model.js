const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    password: {
        type:String,
        required: [true, "Please provide a password"],
    },
    email:{
        type: String,
        required: [true, "Please provide an email"],
    }
})

const UserModel = model("User", UserSchema)

module.exports = UserModel