const Router = require("express").Router()
const validator = require("../middleware/formRequest/commandeFormRequest")

const { index, show, update, create, destroy, addBiereToCommande, deleteBiereCommande} = require("../controllers/commandeController")

Router.get("/bars/:id_bar/commandes", index)
Router.get("/commandes/:id", show)

Router.post("/bars/:id_bar/commandes", create)
Router.post("/commandes/:Cid/biere/:Bid", addBiereToCommande)

Router.put("/commandes/:id", update)

Router.delete("/commandes/:id", destroy)
Router.delete("/commandes/:Cid/biere/:Bid", deleteBiereCommande)

module.exports = Router;