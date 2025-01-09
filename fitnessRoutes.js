const express = require('express');
const FitnessData = require('../models/FitnessData');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

// Get all fitness data for a user
router.get('/', authenticate, async (req, res) => {
  try {
    const data = await FitnessData.find({ userId: req.user.id });
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Add fitness data
router.post('/add', authenticate, async (req, res) => {
  const { date, steps, caloriesBurned, workoutType } = req.body;
  try {
    const newFitnessData = new FitnessData({
      userId: req.user.id,
      date,
      steps,
      caloriesBurned,
      workoutType,
    });
    await newFitnessData.save();
    res.status(201).send('Fitness data added');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
