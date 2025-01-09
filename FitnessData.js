const mongoose = require('mongoose');

const fitnessDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, required: true },
  steps: { type: Number },
  caloriesBurned: { type: Number },
  workoutType: { type: String },
});

module.exports = mongoose.model('FitnessData', fitnessDataSchema);
