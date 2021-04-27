const express = require('express');
const cryptoRoute = require('./home/crypto');
const stockRoute = require('./home/stock');
const forexRouter = require('./home/forex');
const router = express.Router();

router.use('/crypto', cryptoRoute);
router.use('/stock', stockRoute);
router.use('/forex', forexRouter);


router.get('/', (req, res) =>{
    res.send('home');
});

module.exports = router;