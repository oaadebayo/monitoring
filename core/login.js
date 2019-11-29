const pool = require('./pool');

function user_login (req, res){
    console.log('ready');
         
             var username = req.body.username;
             var password = req.body.password;
         
        var users_login = [
            req.body.username,
            req.body.password,
        ]
        console.log(user_login);

        pool.query("SELECT * from user WHERE username = ? ", [username], function(error,results, fields){
            if(error){
                res.send({
                    code: 400,
                    failed: 'there are some error with query'
                })
            }else{
                if (results.length>0){
                    if (results[0].password ==password ){
                        res.render('index2',{
                            code: 200,
                            success: 'login successful',
                            message: 'Logged in as :' + results[0].username
                        });
                    }else{
                        res.render('authentication-login',{
                           code: 204,
                           message: 'Username and Password Does Not Match' 
                        });
                    }
                }
                else{
                    res.render('authentication-login',{
                        code:204,
                        message: 'Username does not exists'
                    });
                }
            }
        }
        // let sql = `INSERT INTO user(email, firstname, lastname, username, password, position) VALUES (?,?,?,?,?,?)`;

        )}

module.exports = user_login;