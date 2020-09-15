var express = require('express');
var router = express.Router();

const userController = require ('../controllers/user-controller')



router.post('/', userController.createUser);
router.get('/', userController.getAllUsers)
router.get('/:idUser', userController.findOneUserById)


module.exports = router;
