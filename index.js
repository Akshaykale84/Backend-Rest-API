var BSEAPI = require('./routes/stocks/bse/index');
var NSEAPI = require('./routes/stocks/nse/index');

var API = {
	BSE: BSEAPI,
	NSE: NSEAPI
};

module.exports = API;