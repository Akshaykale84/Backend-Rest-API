const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send('/home/crypto');
});

module.exports = router;