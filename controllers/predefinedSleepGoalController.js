const prisma = require('../database/db');

// Create a new predefined sleep goal
exports.createPredefinedSleepGoal = async (req, res) => {
  const { name , description, targetValue, ageGroup, priority, benefits, issues } = req.body;

  try {
    const newPredefinedSleepGoal = await prisma.predefinedSleepGoal.create({
      data: {
        name,
        description,
        targetValue,
        ageGroup,
        priority,
        benefits,
        issues,
      },
    });

    res.status(201).json(newPredefinedSleepGoal);
  } catch (error) {
    console.error('Error creating predefined sleep goal:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Fetch all predefined sleep goals
exports.getAllPredefinedSleepGoals = async (req, res) => {
  try {
    const predefinedSleepGoals = await prisma.predefinedSleepGoal.findMany();
    res.status(200).json(predefinedSleepGoals);
  } catch (error) {
    console.error('Error fetching predefined sleep goals:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Fetch a predefined sleep goal by ID
exports.getPredefinedSleepGoalById = async (req, res) => {
  const { id } = req.params;

  try {
    const predefinedSleepGoal = await prisma.predefinedSleepGoal.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!predefinedSleepGoal) {
      return res.status(404).json({ message: 'Predefined sleep goal not found' });
    }

    res.status(200).json(predefinedSleepGoal);
  } catch (error) {
    console.error('Error fetching predefined sleep goal by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a predefined sleep goal
exports.updatePredefinedSleepGoal = async (req, res) => {
  const { id } = req.params;
  const { description, targetValue, ageGroup, priority, benefits, potentialIssues } = req.body;

  try {
    const updatedPredefinedSleepGoal = await prisma.predefinedSleepGoal.update({
      where: { id: parseInt(id, 10) },
      data: {
        description,
        targetValue,
        ageGroup,
        priority,
        benefits,
        potentialIssues,
      },
    });

    res.status(200).json(updatedPredefinedSleepGoal);
  } catch (error) {
    console.error('Error updating predefined sleep goal:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a predefined sleep goal
exports.deletePredefinedSleepGoal = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.predefinedSleepGoal.delete({
      where: { id: parseInt(id, 10) },
    });

    res.status(204).json({ message: 'Predefined sleep goal deleted successfully' });
  } catch (error) {
    console.error('Error deleting predefined sleep goal:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
