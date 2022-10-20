const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController');
const { protect } = require('../middleWare/authMiddleware');

//registration / login / get data
router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', getMe);

module.exports = router;