const express = require('express');
const router = express.Router();
var API = require('../../../index');

var BSEAPI = API.BSE;

// Bombay Stock Exchange (NSE) APIS

router.get("/get_indices", (req, res) => {
    BSEAPI.getIndices()
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/getIndexInfo", (req, res) => {
    BSEAPI.getIndexInfo(req.query.indexId)
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_index_chart_data", (req, res) => {
    BSEAPI.getIndexChartData(req.query.indexId, req.query.time)
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_index_stocks", (req, res) => {
    BSEAPI.getIndexStocks(req.query.indexId)
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_company_info", (req, res) => {
    BSEAPI.getCompanyInfo(req.query.companyKey)
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_stocks_chart_data", (req, res) => {
    BSEAPI.getStocksChartData(req.query.companyKey, req.query.time)
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_stock_info_and_day_chart_data", (req, res) => {
    BSEAPI.getStockInfoAndDayChartData(req.query.companyKey)
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_gainers", (req, res) => {
    BSEAPI.getGainers()
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/get_losers", (req, res) => {
    BSEAPI.getLosers()
        .then(function (response) {
            res.json(response.data);
        });
});

router.get("/getTopTurnOvers", (req, res) => {
    BSEAPI.getTopTurnOvers()
        .then(function (response) {
            res.json(response.data);
        });
});

module.exports = router;