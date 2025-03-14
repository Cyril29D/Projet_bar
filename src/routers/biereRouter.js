const router = require("express").Router()
const validator = require("../middleware/formRequest/biereFormRequest")

const { index, show, update, create, destroy, getDegree} = require("../controllers/bierreController")

router.get("/api/bars/:id_bar/biere", index)
router.get("/api/biere/:id", show)
router.get("/api/bars/:id_bar/degree", getDegree)

router.post("/api/bars/:id_bar/biere", create)

router.put("/api/biere/:id", update)

router.delete("/api/biere/:id", destroy)


module.exports = router;
