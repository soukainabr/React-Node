const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

//blog routes

router.post('/createUser', userController.createUser);
router.get('/', userController.find);
router.get('/getUser/:id', userController.getUser);
router.put('/updateUser/:id', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser);

module.exports = router;