const Sequelize = require("sequelize")

const Dialect = process.env.DIALECT || "sqlite"
const Storage = process.env.DB || "db.sqlite"

const db = new Sequelize({
    dialect: Dialect,
    storage: Storage
})

db.sync()

module.exports = db