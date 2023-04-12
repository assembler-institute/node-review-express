const UserModel = require("../models/user.model")


const signUp =  async (req, res) => {
    const {name, password, email} = req.body
    try {
       const user = await UserModel.create({name, password, email})
        res.status(200).send({ data: user })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }

}


const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find({})
        res.status(200).send({ data: users })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}


module.exports = {
    signUp, getAllUsers
}