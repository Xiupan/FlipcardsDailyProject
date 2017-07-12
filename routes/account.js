// Have user registration, login, and logout
const express = require("express");
const router = express.Router();
const Account = require("../models/Account");

router.post('/api/register', function(request, response){ // registers new user into the DB
  const account = new Account();
  console.log(request.body);
  account.username = request.body.username;
  account.password = request.body.password;
  account.save()
  .then(function(newAccount){
    response.status(201).json({newAccount})
  })
  .catch(function(error){
    response.status(422).json({
      error: error,
      account: newAccount
    })
  })
})

router.post('/api/login', function(request, response){ // logins the user
  Account.findOne({
    username: request.body.username,
    password: request.body.password
  })
  .then(function(foundAccount){
    response.json({foundAccount})
  })
  .catch(function(error){
    response.json({
      error: error,
      account: account
    })
  })
})

// doesnt work yet...
// router.post('/api/logout', function(request, response){
//   request.session.destroy(function(){
//     response.send('Successfully logged out.')
//   })
// })

module.exports = router;
