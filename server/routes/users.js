const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {
  User,
  validate,
  validateCards
} = require('../models/user');
const {
  Card
} = require('../models/card');
const auth = require('../middleware/auth');
const router = express.Router();

const getCards = async (cardsArray) => {
  const cards = await Card.find({
    "number": {
      $in: cardsArray
    }
  });
  return cards;
};


// get the card array that contains all the cards that the user added to his favorites.
router.get('/my-cards', auth, async (req, res) => {
  try {
    let user = await User.findOne({
      _id: req.user._id
    });
    let cardArray = user.cards;
    let cards = await Card.find({
      _id: {
        $in: cardArray
      }
    })
    res.json(cards);
  } catch (err) {
    console.log(err)
  }

});

//add new cards to favorites 
router.patch('/cards', auth, async (req, res) => {

  const {
    error
  } = validateCards(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const cards = await User.updateOne({
    _id: req.user._id,
  }, req.body);
  res.json(cards);

});

router.get('/me', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.send(user);
});

router.post('/', async (req, res) => {
  const {
    error
  } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({
    email: req.body.email
  });
  if (user) return res.status(400).send('User already registered.');

  user = new User(_.pick(req.body, ['name', 'email', 'password', 'cards']));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  res.send(_.pick(user, ['_id', 'name', 'email']));

});

module.exports = router;