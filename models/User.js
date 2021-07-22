/* User model definition */

class User {
    constructor(
        id,
        username,
        name,
        lastname,
        email
    ) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.complete_name = name + ' ' + lastname;
    }
}

module.exports = User;
