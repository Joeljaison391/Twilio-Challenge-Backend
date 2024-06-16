const prisma = require('../database/db');

exports.registerUser = async (req, res) => {
    const { email, username, phoneNumber, fullName, country, uid } = req.body;
  
    try {
      const existingUser = await prisma.user.findUnique({
        where: { uid: uid },
      });
  
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists.' });
      }
  
      const newUser = await prisma.user.create({
        data: {
          email,
          username,
          phoneNumber,
          fullName,
          country,
          uid, 
          healthScore: 0, 
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