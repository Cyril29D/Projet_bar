require("dotenv").config()

const express = require("express")
const bodyParser = require("body-parser")
const app = express()


const PORT = process.env.SERVER_PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extends: false}))
app.use(require("./src/routers/biereRouter"))
app.use(require("./src/routers/barRouter"))
app.use(require("./src/routers/commandeRouter"))
app.listen(PORT, () => {
    console.log("server listening on port ", PORT)
})

