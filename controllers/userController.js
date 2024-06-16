const prisma = require('../database/db');

exports.registerUser = async (req, res) => {
    const { email, username, phoneNumber, fullName, country, uid } = req.body;
  
    try {
      // Check if the user already exists
      const existingUser = await prisma.user.findUnique({
        where: { uid: uid },
      });
  
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists.' });
      }
  
      // Create a new user
      const newUser = await prisma.user.create({
        data: {
          email,
          username,
          phoneNumber,
          fullName,
          country,
          uid, // Storing Firebase UID
          healthScore: 0, // Initialize healthScore
        },
      });
  
      res.status(201).json({
        message: 'User registered successfully',
        user: {
          id: newUser.id,
          email: newUser.email,
          username: newUser.username,
          phoneNumber: newUser.phoneNumber,
          fullName: newUser.fullName,
          country: newUser.country,
          healthScore: newUser.healthScore,
          createdAt: newUser.createdAt,
          updatedAt: newUser.updatedAt,
        },
      });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };