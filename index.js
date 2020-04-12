const express = require('express');
const cors = require('cors');

// const route = express.Router();
// const boodyparse = require('body-parse');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/',function (rqt,res){
    res.send('itt is working somehow')
})
var createcamp = require('./createcamp');
var updatecamp = require('./updatecamp');
var deletecamp = require('./deletecamp');
var getcamp = require('./getcamp');


app.use('/create',createcamp);
app.use('/update',updatecamp);
app.use('/delete',deletecamp);
app.use('/getcamp',getcamp);


app.listen(3000,()=>'Server is runninng on port 3001');