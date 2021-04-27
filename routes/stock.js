const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send('stock');
});

module.exports = router;