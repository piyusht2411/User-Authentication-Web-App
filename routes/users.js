const express = require ('express');
const router = express.Router();

const user_contrller = require('../controllers/users.controller');

router.get('/profile', user_contrller.profile);
router.get('/sign-in', user_contrller.sign_in);
router.get('/sign-up', user_contrller.sign_up);


module.exports = router;
