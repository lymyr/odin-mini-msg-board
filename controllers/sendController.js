import { 
    postMessage as queryAddMsg
 } from "../db/query.js"

function getSendPage(req, res) {
    res.render('send')
}

async function postMessage(req, res) {
    const { username, message } = req.body
    await queryAddMsg(username, message, new Date())
    res.redirect('/')
}

export { getSendPage, postMessage }