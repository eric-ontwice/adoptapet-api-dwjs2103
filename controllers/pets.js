/* Pets controller */

const Pet = require('../models/Pet');

const pet1  = new Pet('dog', 'Firulais', false, 'CDMX', 3)
const pet2  = new Pet('cat', 'Mishi', false, 'CDMX', 3)

const petsDatabase = [ pet1, pet2 ]

function getPets(req, res) {
    res.send(petsDatabase)
}

function getPet(req, res) {
    const pet = petsDatabase.filter(pet => pet.name === req.params.name);
    res.send(pet.pop())
}

function getPetsByKind(req, res) {
    const kind = req.params.kind;
    const filteredPets = petsDatabase.filter(pet => pet.kind === kind);
    res.send(filteredPets);
}

module.exports = {
    getPets,
    getPetsByKind,
    getPet
}