const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const BankBranch = require('./model/bankSchema');

const URL = 'mongodb://user:user123@ds245150.mlab.com:45150/bank_detail';
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// use connect method to connect to the server
mongoose.connect(URL);
const db = mongoose.connection;

//check connection
db.once('open',function() {
    console.log('connected to mongodb: ');
});

// check for DB errors
db.on('error', function(err) {
    console.log('db error: ', err);
}); 

app.get('/api/bankName', (req, res) => {
    BankBranch.find(req.query, (err, list) => {
        if(err) {
            console.log(err);
            res.send('error');
        } else {
            console.log(list);
            res.send(list);
        }
    });
});

console.log('port :', port);
app.listen(port, () => {
    console.log('listening on port 3000');
});