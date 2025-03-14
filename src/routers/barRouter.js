const Router = require("express").Router()
const validator = require("../middleware/formRequest/barFormRequest")

const { index, show, update, destroy, store} = require("../controllers/barController")


Router.get("/api/bars", index)

Router.get("/api/bars/:id", show)

Router.post("/api/bars", store)

Router.put("/api/bars/:id", update)

Router.delete("/api/bars/:id", destroy);

module.exports = Router;