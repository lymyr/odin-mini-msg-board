import messages from "../messages.js"

function getSendPage(req, res) {
    res.render('send')
}

function postMessage(req, res) {
    messages.push({
        user: req.body.username,
        text: req.body.message,
        added: new Date()
    })
    res.redirect('/')
}

export { getSendPage, postMessage }