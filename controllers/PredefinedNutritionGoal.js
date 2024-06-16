const prisma = require('../database/db');

// Create a new predefined nutrition goal
exports.createPredefinedNutritionGoal = async (req, res) => {
  const { name, description, mealType, mealTimes, recommendedDailyMeals, targetValue, dailyCalories, type, ageGroup, priority, benefits, issues } = req.body;

  try {
    const newPredefinedNutritionGoal = await prisma.predefinedNutritionGoal.create({
      data: {
        name,
        description,
        mealType,
        mealTimes,
        recommendedDailyMeals,
        targetValue,
        dailyCalories,
        type,
        ageGroup,
        priority,
        benefits,
        issues,
      },
    });

    res.status(201).json(newPredefinedNutritionGoal);
  } catch (error) {
    console.error('Error creating predefined nutrition goal:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Fetch all predefined nutrition goals
exports.getAllPredefinedNutritionGoals = async (req, res) => {
  try {
    const predefinedNutritionGoals = await prisma.predefinedNutritionGoal.findMany();
    res.status(200).json(predefinedNutritionGoals);
  } catch (error) {
    console.error('Error fetching predefined nutrition goals:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Fetch a predefined nutrition goal by ID
exports.getPredefinedNutritionGoalById = async (req, res) => {
  const { id } = req.params;

  try {
    const predefinedNutritionGoal = await prisma.predefinedNutritionGoal.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!predefinedNutritionGoal) {
      return res.status(404).json({ message: 'Predefined nutrition goal not found' });
    }

    res.status(200).json(predefinedNutritionGoal);
  } catch (error) {
    console.error('Error fetching predefined nutrition goal by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a predefined nutrition goal
exports.updatePredefinedNutritionGoal = async (req, res) => {
  const { id } = req.params;
  const { name, description, mealType, mealTimes, recommendedDailyMeals, targetValue, dailyCalories, type, ageGroup, priority, benefits, issues } = req.body;

  try {
    const updatedPredefinedNutritionGoal = await prisma.predefinedNutritionGoal.update({
      where: { id: parseInt(id, 10) },
      data: {
        name,
        description,
        mealType,
        mealTimes,
        recommendedDailyMeals,
        targetValue,
        dailyCalories,
        type,
        ageGroup,
        priority,
        benefits,
        issues,
      },
    });

    res.status(200).json(updatedPredefinedNutritionGoal);
  } catch (error) {
    console.error('Error updating predefined nutrition goal:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a predefined nutrition goal
exports.deletePredefinedNutritionGoal = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.predefinedNutritionGoal.delete({
      where: { id: parseInt(id, 10) },
    });

    res.status(200).json({ message: 'Predefined nutrition goal deleted successfully' });
  } catch (error) {
    console.error('Error deleting predefined nutrition goal:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
