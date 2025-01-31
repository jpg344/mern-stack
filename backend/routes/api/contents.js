const express = require('express');
const router = express.Router();

// Load Book model
const Book = require('../../models/Contents');

router.get('/', (req, res) => {
    Content.find()
      .then(contents => res.json(contents))
      .catch(err => res.status(404).json({ message: 'No connection to the DB' }));
  });

module.exports = router;