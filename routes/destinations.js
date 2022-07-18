const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// The starts with path is '/'

// POST /movies/:id/reviews
router.post('/flights/:id/destinations', destinationsCtrl.create);



module.exports = router;