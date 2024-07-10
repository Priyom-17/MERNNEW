const { signup } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router=require('express').Router();


router.post('/signup',loginValidation,signup)
router.post('/signup',signupValidation,signup);

module.exports=router;
