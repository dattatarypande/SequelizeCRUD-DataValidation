var express = require('express');
var router = express.Router();
const userController=require('../controllers/user.controller');
const { body } = require('express-validator');

/* GET users listing. */
router.post('/create',
body('name').notEmpty().withMessage('Name Required').isAlpha().withMessage('Please Enter A Name In Character only').isLength({min:2,max:40}).withMessage("Name Should be between 2 to 40"),
body('email').notEmpty().withMessage('Please Enter Email Id').isEmail().withMessage('Please Enter A Valid Email Address').normalizeEmail(),
body('mobile').notEmpty().withMessage('Please Enter Mobile Number').isLength({min:10,max:12}).withMessage('Please Enter Mobile Number in 10 or 12 digits only').isNumeric().withMessage('Please Enter Mobile Number In Only Digits'),
body('password').notEmpty().withMessage('Please Enter A Password'),
userController.createUser);
router.get('/allusers',userController.getallUsers);
router.post('/update',userController.updateUser);
router.post('/delete',userController.deleteUser);
router.get('/:id',userController.findoneuser);



module.exports = router;
