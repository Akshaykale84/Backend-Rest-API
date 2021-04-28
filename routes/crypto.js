const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send('crypto');
});

router.post('/:id', (req, res) =>{
    console.log(req.params.id);
    res.send('crypto post');
});

module.exports = router;