const express = require('express');
const FriendsController = require('../controllers/friends.controller');


const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
    console.log('ip address',req.ip);
    next();
});

friendsRouter.get('/', FriendsController.getFriends);
friendsRouter.post('/', FriendsController.postFriend);
friendsRouter.get('/:id', FriendsController.getFriend);

module.exports = friendsRouter;