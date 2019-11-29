const util = require('util');
const mysql = require('mysql');
/**
 * Connection to  the database.
 */
const pool = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password : '',
    database : 'ards_markettrends'
});

pool.connect((err, connection) =>{
    if (err){
        console.log(err);
        throw err;
    }
    console.log('MySQL connected...')
});


module.exports = pool;