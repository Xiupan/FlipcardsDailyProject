// Allow the user to create multiple decks of flipcards
// ***Allow the user to create flipcards within a deck
// Allow the user to edit a flipcard
// Allow the user to delete a flipcard
// Allow the user to start a quiz using a flipcard deck
// Ideally, this quiz would show the cards randomly
// When a flipcard is flipped, allow the user to choose whether they answered successfully or unsuccessfully, and record that answer

const express = require("express");
const router = express.Router();
const Flipcard = require("../models/Flipcard");

router.post('/api/newCard', function(request, response){ // creates a new card and displays it
  const flipcard = new Flipcard();
  flipcard.card.push({question: request.body.question, answer: request.body.answer});
  flipcard.save()
  .then(function(newFlipcard){
    response.json(newFlipcard)
  })
})

router.post('/api/:id/editCard', function(request, response){
  var cardId = request.params.id;
  Flipcard.findOne({
    _id: cardId
  })
  .then(function(foundCard){
    response.json(foundCard)
    // foundCard.card[0].question = request.body.question;
    // foundCard.card[0].answer = request.body.answer;
    // foundCard.save()
    // .then(function(editedCard){
    //   response.json({editedCard});
    // })
  })
})

module.exports = router;
