const express = require('express');
const router = express.Router();

var API = require('../../../index');
var NSEAPI = API.NSE;


// National Stock Exchange (NSE) APIS

router.get("/get_market_status", (req, res) => {
    NSEAPI.getMarketStatus()
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_indices", (req, res) => {
    NSEAPI.getIndices()
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_quotes", (req, res) => {
    NSEAPI.getQuotes()
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_quote_info", (req, res) => {
    NSEAPI.getQuoteInfo(req.query.companyName)
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_gainers", (req, res) => {
    NSEAPI.getGainers()
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_losers", (req, res) => {
    NSEAPI.getLosers()
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_incline_decline", (req, res) => {
    NSEAPI.getInclineDecline()
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_index_stocks", (req, res) => {
    NSEAPI.getIndexStocks(req.query.symbol)
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/search_stocks", (req, res) => {
    NSEAPI.searchStocks(req.query.keyword)
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_intra_day_data", (req, res) => {
    NSEAPI.getIntraDayData(req.query.companyName, req.query.time)
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_52_week_high", (req, res) => {
    NSEAPI.get52WeekHigh()
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_52_week_low", (req, res) => {
    NSEAPI.get52WeekLow()
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_top_value_stocks", (req, res) => {
    NSEAPI.getTopValueStocks()
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_top_volume_stocks", (req, res) => {
    NSEAPI.getTopVolumeStocks()
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_stock_futures_data", (req, res) => {
    NSEAPI.getStockFuturesData(req.query.companyName, req.query.time)
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_chart_data_new", (req, res) => {
    NSEAPI.getChartDataNew(req.query.companyName, req.query.time)
        .then(function (response) {
            res.json(response.data);
        });
});


module.exports = router;