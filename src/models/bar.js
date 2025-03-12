const db = require("../../config/db")
const Sequelize = require("sequelize")

const Bar = db.define("Bars", {
    id: { type: Sequelize.INTEGER, autoIncrements: true, primaryKey: true },
    name: { type: Sequelize.STRING, unique: true, allowNull: false },
    adresse: { type: Sequelize.STRING, allowNull: false },
    tel: { type: Sequelize.STRING, allowNull: true },
    email: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.TEXT, allowNull: true }
})

module.exports = Bar