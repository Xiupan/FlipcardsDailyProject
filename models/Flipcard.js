const mongoose = require("mongoose");
const flipcardSchema = new mongoose.Schema({
  card: [{
    question: {type: String, required: true},
    answer: {type: String, required: true}
  }]
})

const Flipcard = mongoose.model('Flipcard', flipcardSchema);
module.exports = Flipcard;
