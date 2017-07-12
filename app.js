// Have user registration, login, and logout
// Allow the user to create multiple decks of flipcards
// Allow the user to create flipcards within a deck
// Allow the user to edit a flipcard
// Allow the user to delete a flipcard
// Allow the user to start a quiz using a flipcard deck
// Ideally, this quiz would show the cards randomly
// When a flipcard is flipped, allow the user to choose whether they answered successfully or unsuccessfully, and record that answer

const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/flipcardsDB');

app.use(bodyParser.urlencoded({extended: false}));

app.listen(3000, function(){
    console.log('Flipcards App is running!');
});
