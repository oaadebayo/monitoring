const pool = require('./pool');

function create_markettrends(req, res){
    console.log('market trends ready');
    var markettrendsdets = {
        "date": req.body.date,
        "marketname" : req.body.marketname,
        "producename" : req.body.producename,
        "price" : req.body.price,
        "quantity" : req.body.quantity,
        "username": (req.session.username ? req.session.username : null), //this just checks if req.session.username is not null or empty and uses null if it is, just as a failsafe, it ought not to be empty or null
    } 
    console.log(markettrendsdets)
    pool.query("INSERT INTO marketmonitoring SET ?", markettrendsdets, function(error, lastId, fields){
        if(error){
            console.log("error occured", error);
        }else {
            res.render('form-basic', {message: 'Market Data Saved... You can add more data',data: lastId, status:true});
        }
    })
}

module.exports = create_markettrends;