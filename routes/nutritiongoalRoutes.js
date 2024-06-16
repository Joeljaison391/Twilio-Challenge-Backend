const express = require('express');
const router = express.Router();
const {
  createPredefinedNutritionGoal,
  getAllPredefinedNutritionGoals,
  getPredefinedNutritionGoalById,
  deletePredefinedNutritionGoal,
  updatePredefinedNutritionGoal,
} = require('../controllers/PredefinedNutritionGoal');

// Create a new predefined nutrition goal
router.post('/', createPredefinedNutritionGoal);

// Fetch all predefined nutrition goals
router.get('/', getAllPredefinedNutritionGoals);

// Fetch a predefined nutrition goal by ID
router.get('/:id', getPredefinedNutritionGoalById);

// Delete a predefined nutrition goal by ID
router.delete('/:id', deletePredefinedNutritionGoal);

// Update a predefined nutrition goal by ID
router.put('/:id', updatePredefinedNutritionGoal);


module.exports = router;
