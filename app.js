const express = require('express');
const bodyparser = require('body-parser');
//Import Routes
const stockRoute = require('./routes/stock');
const homeRoute = require('./routes/home');
const cryptoRoute = require('./routes/crypto');
const forexRoute = require('./routes/forex');
const userRoute = require('./routes/user');
const bseRoute = require('./routes/stocks/bse/bse');
const nseRoute = require('./routes/stocks/nse/nse');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port);
app.use(bodyparser.json());
//Using Routes
app.use('/stock', stockRoute);
app.use('/home', homeRoute);
app.use('/crypto', cryptoRoute);
app.use('/forex', forexRoute);
app.use('/user', userRoute);
app.use('/bse', bseRoute);
app.use('/nse', nseRoute);

app.get('/', (req, res) => {
    res.send("Hello, World");
});


module.exports = app;