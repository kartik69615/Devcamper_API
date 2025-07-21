const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Show all bootcamps'
  });
});

router.get('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    message: `Show bootcamp with ID ${req.params.id}`
  });
});

router.post('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Create new bootcamp'
  });
});

router.put('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    message: `Update bootcamp with ID ${req.params.id}`
  });
});

router.delete('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: `Update bootcamp with ID ${req.params.id}`
  });
});

module.exports = router;