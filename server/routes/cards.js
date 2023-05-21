const express = require('express');
const _ = require('lodash');
const {
  Card,
  validateCard,
  generateNumber
} = require('../models/card');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/my-cards', auth, async (req, res) => {
  if (!req.user) {
    return res.status(401).send("Access Denied")
  }

  const cards = await Card.find({
    user_id: req.user._id
  });
  res.json(cards);
})

router.get('/all-cards', async (req, res) => {

  const cards = await Card.find({});
  res.json(cards);
})


router.delete('/:id', auth, async (req, res) => {

  const card = await Card.findOneAndRemove({
    _id: req.params.id,
    user_id: req.user._id
  });
  if (!card) return res.status(404).send('The card with the given ID was not found.');
  res.send(card);

});

router.put('/:id', auth, async (req, res) => {

  const {
    error
  } = validateCard(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let card = await Card.findByIdAndUpdate({
    _id: req.params.id,
    user_id: req.user._id
  }, req.body);
  if (!card) return res.status(404).send('The card with the given ID was not found.');

  res.send(card);

});



router.get('/:id', auth, async (req, res) => {

  const card = await Card.findOne({
    _id: req.params.id,
    user_id: req.user._id
  });
  if (!card) return res.status(404).send('The card with the given ID was not found.');
  res.send(card);

});

router.post('/', auth, async (req, res) => {

  const {
    error
  } = validateCard(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let card = new Card({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    image: req.body.image ? req.body.image : 'https://cdn.pixabay.com/photo/2012/04/11/00/01/delete-27201_960_720.png',
    number: await generateNumber(Card),
    user_id: req.user._id
  });

  post = await card.save();
  res.send(post);

});

module.exports = router;