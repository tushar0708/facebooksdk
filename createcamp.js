const express = require('express');
const route = express.Router();
var tushar =require('./facebook');
console.log(tushar.account.id) // fields can be accessed as properties
tushar.account.createCampaign(
    [],
    {
      [tushar.Campaign.Fields.name]: 'test campaign', // Each object contains a fields map with a list of fields supported on that object.
      [tushar.Campaign.Fields.status]: tushar.Campaign.Status.paused,
      [tushar.Campaign.Fields.objective]: tushar.Campaign.Objective.page_likes
    }
  )
  .then((result) => {

    console.log(result);
  })
  .catch((error) => {
    //   console.log(error);
  });
 
  module.exports=route;