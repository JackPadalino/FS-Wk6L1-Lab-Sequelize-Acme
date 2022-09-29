const Sequelize = require("sequelize");
const db = require("./db");

const Person = db.define('person',{
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    }
});

module.exports = Person;