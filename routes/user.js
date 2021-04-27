const express = require('express');
const loginRoute = require('./user/login');
const registerRoute = require('./user/register');
const deleteRoute = require('./user/delete')
const router = express.Router();

router.use('/login', loginRoute);
router.use('/register', registerRoute);
router.use('/delete', deleteRoute);

router.get('/', (req, res) =>{
    res.send('user');
});

module.exports = router;