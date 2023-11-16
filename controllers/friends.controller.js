const friends  = require('../models/friends.model');
function getFriends (req, res) {
    res.json(friends);
}

function getFriend (req, res) {
    const id = req.params.id;
    const friend = friends[id];
    if(friend){
        res.status(200).json(friend);
    } else{
        res.status(404).json({error: 'Friend id is not found'});
    }
}

function postFriend (req, res) {
    if(!req.body.name){
       return res.status(400).json({
            error: 'Wrong data entered.'
        })
    }
    const newFriend = {
        name: req.body.name,
        id: friends.length
    };
    friends.push(newFriend);
    res.json(newFriend);
}

module.exports = {
    getFriend,
    getFriends,
    postFriend
}