const express = require('express');
const session = require('express-session');
const createUser = require('../core/user');
const createMarketTrend = require('../core/post_markettrends');
const userLogin = require('../core/login');
const userLogout = require('../core/logout');
const path = require('path');
const router = express.Router();



//get index page
router.get('/', (req, res, next)=>{
    res.render('authentication-login', {title:"ARDSMONITORING"});
})

router.get('/home', (req, res, next)=>{
    res.render('authentication-register', {title:"ARDSMONITORING"});
})
// Get registration page
router.post('/register', function(req, res){
    createUser(req, res);
  
    console.log(req.body);
});

//post market data
router.post('/marketdata', (req, res, next)=>{
    createMarketTrend(req,res);

    console.log()
})
// Get login page 
router.post('/login', (req, res, next)=>{

    userLogin(req, res);
    console.log(req.body);
});

//Get forms page
router.get('/monitoringform', (req, res)=>{
    res.render('form-basic')
});

// get logout page
router.post('/logout', (req, res)=>{
    userLogout(req, res);
    console.log(req.body);
})
module.exports = router;