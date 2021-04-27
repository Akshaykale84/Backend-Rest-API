const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send('/home/stock');
});

module.exports = router;