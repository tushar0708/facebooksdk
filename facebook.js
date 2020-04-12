
const adsSdk = require('facebook-nodejs-ads-sdk');
const accessToken = 'EAAI9H5CwAL4BACPclAlr7N3i9AQdG6zbGumh0KS7YBYSioluZCBSFcBAc0PolMSzXx9hKVwSZCsU5hQ8X3g3ZBPRNZCpOaVzq9Eq1EX51BM1KYT63I2HMheSjZCnUo9Jckaq2rzSXQ6HCdprV3XpVsxqp4KNJSyeM6ZBZBNWRHl53KCES3qZCJGr5rjXUY8DUaZAbnOZAspS0VhQZDZD';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const AdAccount = adsSdk.AdAccount;
const Campaign = adsSdk.Campaign;
// const account = new AdAccount('act_2524954594275943');
const account = new AdAccount('act_497422571027432');

//console.log(account) // fields can be accessed as properties
// account.createCampaign(
//     [],
//     {
//       [Campaign.Fields.name]: 'test campaign', // Each object contains a fields map with a list of fields supported on that object.
//       [Campaign.Fields.status]: Campaign.Status.paused,
//       [Campaign.Fields.objective]: Campaign.Objective.page_likes
//     }
//   )
//   .then((result) => {

//     console.log(result);
//   })
//   .catch((error) => {
//     //   console.log(error);
//   });
module.exports={account:account,Campaign:Campaign,AdAccount:AdAccount};