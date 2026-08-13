import messages from "../messages.js"

function getIndexPage(req, res) {
    res.render('index', {messages: messages})
}

function postNav(req, res) {
    res.redirect(`/deets/${Number(req.body.index)}`)
}

function getDeetsPage(req, res) {
    res.render('msgDetails', { message: messages[req.params.index] })
}

export { getIndexPage, postNav, getDeetsPage }