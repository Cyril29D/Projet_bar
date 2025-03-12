const router = require("express").Router()
const validator = require("../middleware/formRequest/biereFormRequest")

const { index, show, update, create, destroy, getDegree} = require("../controllers/bierreController")

router.get("/bars/:id_bar/biere", index)
router.get("/biere/:id", show)
router.get("/bars/:id_bar/degree", getDegree)

router.post("/bars/:id_bar/biere",validator, create)

router.put("/biere/:id",validator, update)

router.delete("/biere/:id", destroy)


module.exports = router;
