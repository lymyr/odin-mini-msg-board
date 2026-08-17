import { body, validationResult } from "express-validator"
import { 
    postMessage as queryAddMsg
 } from "../db/query.js"
import limitMessages from "../helpers/limitMessages.js"

const messageValidator = [
    body('username')
        .trim().notEmpty().withMessage("Username must not be empty.")
        .isLength({max: 20}).withMessage("Username must not exceed 20 characters"),
    body('message')
        .trim().notEmpty().withMessage("Message must not be empty.")
        .isLength({max:300}).withMessage("Message should not exceed 300 characters.")
]

function getSendPage(req, res) {
    res.render('send')
}

const postMessage = [
    messageValidator,
    async (req, res) => {
        const errors = validationResult(req)
        if (errors.isEmpty()) {
            await queryAddMsg(req.body.username, req.body.message, new Date())
            limitMessages()
            return res.redirect('/')
        }
        res.status(400).render('send', {errors: errors.mapped()})
    }
]

export { getSendPage, postMessage }