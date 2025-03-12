const { Bar, Biere } = require("../models/models")
const db = require = require("../../config/db")

const index = (req, res) => {
    let id_bar = req.params.id_bar
    Biere.findAll( {where: { BarId: id_bar}})
    .then((biere) => res.json(biere))
    .catch((err) => res.status(500).json(err))
}

const show = (req, res) => { 
    let id = parseInt(req.params.id)
    Biere.findByPk(id)
    .then((biere) => res.json(biere))
    .catch((err) => res.status(500).json(err))
}

const getDegree = (req, res) => {
    let barId = parseInt(req.params.id_bar)
    const sum = `(SELECT AVG(degree) FROM Bieres WHERE BarId = ${barId})`
    Bar.findByPk(barId, {
        attributes: { include: [[db.literal(sum), "degree"]]}
    }).then((query) => res.json(query))
}

const create = (req, res) =>{
    let barId = parseInt(req.params.id_bar) 
    let { name, description, degree, prix } = req.body
    Biere.create({
        name: name,
        description: description,
        degree: parseFloat(degree),
        prix: parseFloat(prix),
        BarId: barId
    })
    .then((biere) => res.status(201).json({ message: "Biere added", biere}))
}

const update = (req, res) =>{
    let id = req.params.id
    Biere.update(req.body, { where: {id}}).then((biere) => res.json({message: "Biere updated", biere}))
}

const destroy = (req, res) =>{
    let id = req.params.id
    Biere.destroy({ where :{id}}).then(() => res.json({ message: "Biere destroyed"}))
}

module.exports = { index, show, create, update, destroy, getDegree }