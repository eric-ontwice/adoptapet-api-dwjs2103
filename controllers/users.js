/* Users controllers */
const User = require('../models/User');
const ObjectId = require('mongoose').Types.ObjectId;

function getUsers(request, response) {
    User.find().then((users) => {
        response.send(users)
    });
}

function createUser(request, response) {
    const user = new User(request.body)
    User.create(user).then((user) => {
        response.status(201).send(user)
    })
    .catch((error) => {
        response.status(400).send({
            "message": error.message,
            "type": error.name        
        })
    })
};

function updateUser(request, response) {
    const id = request.params.id 
    const body = request.body
    
    User.findOneAndUpdate({"_id": ObjectId(id)}, body)
    .then( (user) => {
        response.status(200).send(user)
    })
    .catch( error => {
        response.status(400).send({
            "message": error.message,
            "type": error.name        
        })
    })
}

module.exports = {
    getUsers,
    createUser,
    updateUser
}
