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

    function create_user(req, res)
    {
        console.log('ready');
         var users = {
             "email": req.body.email,
             "firstname": req.body.firstname,
             "lastname": req.body.lastname,
             "username": req.body.username,
             "password": req.body.password,
             "position": req.body.position
         }
        var users_2 = [
            req.body.email,
            req.body.firstname,
            req.body.lastname,
            req.body.username,
            req.body.password,
            req.body.position
        ]
        console.log(users_2);
        // let sql = `INSERT INTO user(email, firstname, lastname, username, password, position) VALUES (?,?,?,?,?,?)`;

        pool.query("INSERT INTO user SET ?", users, function(error, lastId, fields){
            if (error){
               console.log("error occured", error);
                
            }else {
                res.render('authentication-register',{message: 'Data Saved Successfully', date: Date.now(),data: lastId,status: true});
                
            }
});
    

    }

module.exports = create_user;