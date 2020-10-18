const express = require('express')
const bodyParser = require('body-parser')
const routing = require('./routing.js')
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express()

app.set('views','./views');
app.set('view engine', 'pug');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routing);


const server = app.listen(3001, () => {
    console.log(`Listening on ${server.address().port}`);
});