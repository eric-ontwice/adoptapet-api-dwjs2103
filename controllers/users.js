/* Users controllers */

const User = require('../models/User');

const user1 = new User(1, "mariohd", "Mario", "Hernández", "mario@gmail.com");
const user2 = new User(2, "johndoe", "John", "Doe", "johndoe@gmail.com");

let usersDatabase = [user1, user2];

function getUsers(request, response) {
    return response.send(usersDatabase);
}

function createUser(request, response) {
    const id = usersDatabase.length + 1;
    const newUser = new User(
        id,
        request.body.username,
        request.body.name,
        request.body.lastname,
        request.body.email
    );
    usersDatabase.push(newUser);
    return response.status(201).send(newUser);
};

module.exports = {
    getUsers,
    createUser
}
