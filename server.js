const express = require('express');
const friendsRouter = require('./routes/friends.router');
const messageRouter = require('./routes/messages.router');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;



app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta} miliseconds`);

});
app.use('/site',express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My Friends are very clever!',
        caption: 'Let us go swimming'
    });
});

app.use('/friends',friendsRouter);
app.use('/messages',messageRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}...`);
});