const Sequelize = require("sequelize");
const db = require("./db");

const Souvenir = db.define('souvenir',{});

module.exports = Souvenir;