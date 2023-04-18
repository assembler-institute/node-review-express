const todoRoutes = require('express').Router()
const { addTodo, getAllTodo } = require('../controllers/todo.controllers')
const jwtCheck = require('../middlewares/jwtCheck')

todoRoutes.post('/create/:id', jwtCheck, addTodo)
todoRoutes.get('/:id', getAllTodo)

module.exports = todoRoutes
