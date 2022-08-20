const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
app.use(express.urlencoded());
app.use(cookieParser());
const favicon = require('serve-favicon');
app.use(favicon(__dirname + '/images/favicon.ico'));
app.use(express.static('./assets'));

app.use('/', require('./routes'));
app.set('view engine', 'ejs');
app.set('views', './views')


app.listen(port, (err) => {
    if (err) { console.log(`Error is :${err}`); }
    console.log(`Server is runing on port : ${port}`);
})