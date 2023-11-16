const express = require('express');
const MessageController = require('../controllers/messages.controller');

const messageRouter = express.Router();
messageRouter.get('/', MessageController.getMessages);
messageRouter.post('/', MessageController.postMessage);

module.exports = messageRouter;