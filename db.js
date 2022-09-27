const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/acme');

const Person = db.define('person',{
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    }
});
const Place = db.define('place',{
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    }
});
const Thing = db.define('thing',{
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    }
});

const Souvenir = db.define('souvenir');

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