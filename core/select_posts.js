const express = require('express');
const session = require('express-session');
const pool = require('./pool');
const bcrypt = require('bcryptjs');
const mysql = require('mysql');
//const app = express();
//app.use(session({secret: 'ssshhhhh'}));
// var sess;
// sess = req.session;
    //This function will insert data into the database (create a new user)
    //body is an object

    function select_posts(req, res)
    {
        console.log('ready');
         
        // let sql = `INSERT INTO user(email, firstname, lastname, username, password, position) VALUES (?,?,?,?,?,?)`;

        pool.query("SELECT * FROM `marketmonitoring` WHERE `username` = ?", [req.session.username], function(error, results, fields){
            console.log("hmm", results)
            if (error){
               console.log("error occured", error);
                
            }else {
                res.render('tables',{message: 'Selected Data Successfully', date: Date.now(),data: results ,status: true});
                
            }
});
    

    }

module.exports = select_posts;