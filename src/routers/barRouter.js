const Router = require("express").Router()
const validator = require("../middleware/formRequest/barFormRequest")

const { index, show, update, destroy, store} = require("../controllers/barController")


Router.get("/bars", index)

Router.get("/bars/:id", show)

Router.post("/bars", store)

Router.put("/bars/:id", update)

Router.delete("/bars/:id", destroy);

module.exports = Router;