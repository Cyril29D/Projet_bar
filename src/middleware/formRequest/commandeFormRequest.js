const { body, validationResult } = require("express-validator")


const validateCommande = [
  body("name")
    .notEmpty().withMessage("Le nom doit être saisie ")
    .isString().withMessage("Le nom doit être un string")
    .trim(),

  body("prix")
    .notEmpty().withMessage("Le prix doit être saisie ")
    .isFloat({ gt: 0 }).withMessage("Le prix doit être un nombre")
    .trim(),

    body("date")
    .notEmpty().withMessage("La date doit être saisie ")
    .isISO8601().withMessage("La date doit être au format YYYY-MM-DD")
    .trim(),

    body("status")
    .notEmpty().withMessage("Le status doit être saisie ")
    .isString().withMessage("Le status doit être un string")
    .isIn(["brouillon", "en cours", "terminée"])
    .withMessage("Le statut doit être 'brouillon', 'en cours' ou 'terminée'"),

  (req, res, next) => {
    const errors = validatioResult(req)
    if (errors) return res.status(400).json({ errors });

    next()
  }
]



module.exports = validateCommande