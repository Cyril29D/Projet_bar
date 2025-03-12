const Bar = require("./bar")
const Biere = require("./biere")
const Commande = require("./commande")

Bar.hasMany(Biere)
Biere.belongsTo(Bar)

Bar.hasMany(Commande)
Commande.belongsTo(Bar)

Biere.belongsToMany(Commande, { through : "biere_commande" })
Commande.belongsToMany(Biere, { through: "biere_commande" })

module.exports = { Bar, Biere, Commande }