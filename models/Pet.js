/* Pet model */

class Pet {
    constructor(
        kind,
        name,
        adopted,
        location,
        age
    ) {
        this.kind = kind;
        /* If not exists in db create kind */
        this.name = name;
        this.adopted = adopted;
        this.location = location;
        this.age = age;
    }

    getStringRepresentation () {
        return `${this.name} - ${this.kind} - Status: ${this.adopted}`;
    }

}

module.exports = Pet;