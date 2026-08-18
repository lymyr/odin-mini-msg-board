import {
    getMessages,
    getMessage
} from '../db/query.js'

async function getIndexPage(req, res) {
    const messages = await getMessages()
    res.render('index', {messages: messages})
}

function postNav(req, res) {
    res.redirect(`/deets/${Number(req.body.id)}`)
}

async function getDeetsPage(req, res) {
    const message = await getMessage(Number(req.params.id))
    res.render('msgDetails', { message: message[0] })
}

export { getIndexPage, postNav, getDeetsPage }