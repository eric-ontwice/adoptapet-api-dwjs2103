/* OLD User model definition */
// class User {
//     constructor(
//         id,
//         username,
//         name,
//         lastname,
//         email
//     ) {
//         this.id = id;
//         this.username = username;
//         this.name = name;
//         this.lastname = lastname;
//         this.email = email;
//         this.complete_name = name + ' ' + lastname;
//     }
// }

// Requerir Mongoose
const mongoose = require('mongoose')

// Definir Schema, con tipos de datos
const UserSchema = new mongoose.Schema({
                                    email: String,
                                    name: String,
                                    lastname: String,
                                    address: String,
                                    phone: String,
                                    isAdopting: Boolean
                                });

// Hacer mapeo de una colección de Mongo con schema de Mongoose
const User = mongoose.model("user", UserSchema)

module.exports = User;
