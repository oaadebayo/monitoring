const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const pageRouter = require('./routes/pages');
//for body parser
app.use(bodyParser.urlencoded({extended : false}));

//serve static files.
app.use(express.static(path.join(__dirname,'views')));

//template engine
//app.use('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//session
app.use(session({
    secret: 'ards',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000 * 30
    }
}))

//routers
app.use('/', pageRouter);

//errors : page not found 404
app.use((req, res, next)=>{
    //var err = new Error(authe);
    res.status(404).render('error-404');
    next(res);
});

//handling errors
app.use((err, req, res, next)=>{
    res.status(err.status || 500 );
    res.send(err.message);
});
//setting up the server
app.listen (4200, ()=>{
    console.log('Server successfully stared on port 4200....');
});

module.exports = app;