const db = require('./db');
const Person = require('./person');
const Place = require('./place');
const Thing = require('./thing');
const Souvenir = require('./souvenir');

Souvenir.belongsTo(Person);
Souvenir.belongsTo(Place);
Souvenir.belongsTo(Thing);

module.exports = {
    db,
    Person,
    Place,
    Thing,
    Souvenir
};