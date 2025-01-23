const express = require('express');
const {
  signup,
  signin,
  updateSubscription,
  getUserDetailsByEmail,
} = require('../controllers/userController');
const { signupValidator, signinValidator } = require('../validators/signupValidators');
const { validateRequest } = require('../middlewares/validationMiddleware');
const authenticateUser = require('../middlewares/authenticateUser');

const router = express.Router();

// Signup route
router.post('/signup', signupValidator, validateRequest, signup);

// Signin route
router.post('/signin', signinValidator, validateRequest, signin);

// Get user details by email
router.get('/:email', authenticateUser, getUserDetailsByEmail);

// Update subscription
router.put('/subscription', authenticateUser, updateSubscription);

module.exports = router;
