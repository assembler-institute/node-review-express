const TodoModel = require('../models/todo.model')
const UserModel = require('../models/user.model')

const addTodo = async (req, res) => {
  const { topic, details } = req.body
  const { id } = req.params

  if (!topic || !details) return res.status(400).send({ msg: 'Missing fields' })
  if (!id) return res.status(400).send({ msg: 'Missing user ID' })
  try {
    const user = await UserModel.findById(id)

    const newTodo = await TodoModel.create({
      topic,
      details
    })

    user.todo.push(newTodo._id)

    user.save()
    res.status(201).send({ data: newTodo })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const getAllTodo = async (req, res) => {
  const { id } = req.params
  try {
    const allTodo = await UserModel.findById(id).populate('todo'
    // {
    //   topic: true,
    //   details: true,
    //   _id: false
    // }
    )

    res.status(200).send({ data: allTodo })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

module.exports = {
  addTodo, getAllTodo
}
