const express = require('express');
const stockRoute = require('./routes/stock');
const homeRoute = require('./routes/home');
const cryptoRoute = require('./routes/crypto');
const forexRoute = require('./routes/forex');
const userRoute = require('./routes/user');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port);

app.use('/stock', stockRoute);
app.use('/home', homeRoute);
app.use('/crypto', cryptoRoute);
app.use('/forex', forexRoute);
app.use('/user', userRoute);

app.get('/', (req, res) => {
    res.send("Hello, World");
});
