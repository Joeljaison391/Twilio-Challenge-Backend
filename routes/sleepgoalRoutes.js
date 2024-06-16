const express = require('express');
const router = express.Router();

const { createPredefinedSleepGoal , getAllPredefinedSleepGoals , getPredefinedSleepGoalById , updatePredefinedSleepGoal , deletePredefinedSleepGoal } = require('../controllers/predefinedSleepGoalController');

router.post('/', createPredefinedSleepGoal);
router.get('/', getAllPredefinedSleepGoals);
router.get('/:id', getPredefinedSleepGoalById);
router.put('/:id', updatePredefinedSleepGoal);
router.delete('/:id', deletePredefinedSleepGoal);

module.exports = router;