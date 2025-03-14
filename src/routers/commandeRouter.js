const Router = require("express").Router()
const validator = require("../middleware/formRequest/commandeFormRequest")

const { index, show, update, create, destroy, addBiereToCommande, deleteBiereCommande} = require("../controllers/commandeController")

Router.get("/api/bars/:id_bar/commandes", index)
Router.get("/api/commandes/:id", show)

Router.post("/api/bars/:id_bar/commandes", create)
Router.post("/api/commandes/:Cid/biere/:Bid", addBiereToCommande)

Router.put("/api/commandes/:id", update)

Router.delete("/api/commandes/:id", destroy)
Router.delete("/api/commandes/:Cid/biere/:Bid", deleteBiereCommande)

module.exports = Router;