const db = require("../../config/db")
const Sequelize = require("sequelize")

const Commande = db.define("Commandes", {
    id: { type: Sequelize.INTEGER, autoIncrements: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    prix: { type: Sequelize.FLOAT, allowNull: false, valide: { min: 0}},
    date: { type: Sequelize.DATE, allowNull: false },
    status: { type: Sequelize.STRING, allowNull: false}
})

module.exports = Commande