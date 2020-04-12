const express = require('express');
var app = express();
const route = express.Router();
var tushar =require('./facebook');
const campaignId = '23843467726730655';

new tushar.Campaign(campaignId)
.delete();

  module.exports=route;