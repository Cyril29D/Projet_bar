const Router = require("express").Router()
const validator = require("../middleware/formRequest/commandeFormRequest")

const { index, show, update, create, destroy} = require("../controllers/commandeController")

Router.get("/bars/:id_bar/commandes", index)
Router.get("/commandes/:id", show)

Router.post("/bars/:id_bar/commandes", validator, create)

Router.put("/commandes/:id", validator, update)

Router.delete("/commandes/:id", destroy)

module.exports = Router;