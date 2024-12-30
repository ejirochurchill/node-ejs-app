var express = require('express');
var router = express.Router();
var PartsController = require('../controllers/partsController');

// Mock data to replace database data
const mockPartsList = [
  { id: 1, name: 'Part 1', description: 'Description for part 1' },
  { id: 2, name: 'Part 2', description: 'Description for part 2' },
  { id: 3, name: 'Part 3', description: 'Description for part 3' }
];

// ...existing code...

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Your Page Title', parts: mockPartsList });
});

// ...existing code...

module.exports = router;
