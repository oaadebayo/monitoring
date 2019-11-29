const pool = require('./pool');
const express = require('express');
const session = require('express-session');

 function user_logout (req, res, next){
    if(req.session){
        //delete session object
        req.session.destroy(function(err){
            if(err){
                return next(err);
                
            } else {
                return res.redirect('/');
            }
        })
    }
}

module.exports = user_logout;