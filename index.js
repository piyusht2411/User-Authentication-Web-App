const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local');

app.use(express.urlencoded());
app.use(cookieParser());
const favicon = require('serve-favicon');
app.use(favicon(__dirname + '/images/favicon.ico'));
app.use(express.static('./assets'));

app.set('view engine', 'ejs');
app.set('views', './views')
app.use(session({
    name:'social-chat',
    secret:'somethingSecret',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000 * 60 * 100)
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser)

app.use('/', require('./routes'));

app.listen(port, (err) => {
    if (err) { console.log(`Error is :${err}`); }
    console.log(`Server is runing on port : ${port}`);
})