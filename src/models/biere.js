const db = require("../../config/db")
const Sequelize = require("sequelize")

const Biere = db.define("Bieres", {
        id: { type: Sequelize.INTEGER, autoIncrements: true, primaryKey: true },
        name: { type: Sequelize.STRING, allowNull: false },
        description: { type: Sequelize.TEXT, allowNull: false},
        degree: { type: Sequelize.FLOAT, allowNull: false },
        prix: { type: Sequelize.FLOAT, allowNull: false, validate: { min: 0}},
})

module.exports = Biere