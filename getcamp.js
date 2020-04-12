const express = require('express');
var app = express();
const route = express.Router();
var tushar =require('./facebook');

tushar.account.read([tushar.AdAccount.Fields.name, tushar.AdAccount.Fields.age])
  .then((account) => {
    logPassedTest(test1 + ':Pass', account);
  })
  .catch((error) => {
  });

  module.exports=route;
