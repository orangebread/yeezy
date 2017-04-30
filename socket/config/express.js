var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

module.exports = function(app) {
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
}