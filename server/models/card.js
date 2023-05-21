const Joi = require('joi');
const mongoose = require('mongoose');
const _ = require('lodash');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255
  },
  description: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1024
  },
  location: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 400
  },
  image: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 1024
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Card = mongoose.model('Card', cardSchema);

function validateCard(card) {

  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    description: Joi.string().min(2).max(1024).required(),
    location: Joi.string().min(2).max(400).required(),
    image: Joi.string().min(11).max(1024).allow('')
  });

  return schema.validate(card);
}

async function generateNumber(Card) {

  while (true) {
    let randomNumber = _.random(1000, 999999);
    let card = await Card.findOne({
      number: randomNumber
    });
    if (!card) return String(randomNumber);
  }

}

exports.Card = Card;
exports.validateCard = validateCard;
exports.generateNumber = generateNumber;