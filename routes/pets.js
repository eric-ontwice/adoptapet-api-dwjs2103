/* Pets router */

const router = require('express').Router();

const { getPets, getPetsByKind, getPet } = require('../controllers/pets');

router.get('/', getPets);
router.get('/:name', getPet);
router.get('/kind/:kind', getPetsByKind);


module.exports = router;