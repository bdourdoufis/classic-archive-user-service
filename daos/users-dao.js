const usersModel = require('../models/users/users-model')

const findUserByUsername = (username) => {
    return usersModel.find({username: username});
}
const findUserByCredentials = (credentials) => {
    return usersModel.findOne({
        username: credentials.username,
        password: credentials.password
    })
}
const createUser = (user) => usersModel.create(user)
const updateUser = (user) => usersModel.findByIdAndUpdate(user._id, user)
const findAllUsers = () => usersModel.find();

module.exports = { findUserByUsername, findUserByCredentials, createUser, updateUser, findAllUsers }