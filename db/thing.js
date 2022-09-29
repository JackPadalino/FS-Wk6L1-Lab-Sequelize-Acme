const Sequelize = require("sequelize");
const db = require("./db");

const Thing = db.define('thing',{
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    }
});

module.exports = Thing;