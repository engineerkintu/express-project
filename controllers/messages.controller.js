const path = require('path');

function getMessages (req, res) {
    // res.send('<ul><li>Hello Moses!</li><li>Hello James!</li></ul>');
    // req.sendFile(path.join(__dirname, '..','public', 'images', 'klm.jpeg' ));
    res.render('messages', {
        title: 'Messages to my Friends',
        friend: 'Eng. Kaluba'
    })
}

function postMessage(req, res){
    console.log('Updating messages...')
}

module.exports = {
    getMessages, postMessage
}