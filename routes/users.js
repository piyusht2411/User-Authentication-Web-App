const express = require ('express');
const router = express.Router();

const user_contrller = require('../controllers/users.controller');

router.get('/profile', user_contrller.profile);
router.get('/sign-in', user_contrller.signIn);
router.get('/sign-up', user_contrller.signup);
router.post('/create', user_contrller.create);
router.post('/create-session', user_contrller.creteSession);


module.exports = router;
