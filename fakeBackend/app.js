var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes');
var users = require('./routes/user');
var contacts = require('./routes/contacts');
var campaigns = require('./routes/campaigns');
var agencyLocationProperties = require('./routes/agencyLocationProperties');
var agencyLocations = require('./routes/agencyLocations');
var amsTypeLogTypeMaps = require('./routes/amsTypeLogTypeMaps');
var changeRequests = require('./routes/changeRequests');
var fileUploads = require('./routes/fileUploads');
var status = require('./routes/status');
var topics = require('./routes/topics');
var app = express();
var clientPath = path.resolve(__dirname, '..', 'build');
app.set('views', clientPath);
app.use(express.static(clientPath));
app.set('view engine', 'jade');
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);
//...............
// Start of API
var baseUrl = '/api';
app.get('/', routes.index);
app.get('/users', users.list);
app.get(baseUrl + '/contacts/find', contacts.find);
app.post(baseUrl + '/contacts/save', contacts.save);
app.get(baseUrl + '/campaigns/get', campaigns.get);
app.post(baseUrl + '/campaigns/assign', campaigns.assign);
app.get(baseUrl + '/AgencyLocationProperties/GetByAgencyLocationId', agencyLocationProperties.getByAgencyLocationId);
app.get(baseUrl + '/AgencyLocations/GetAll', agencyLocations.getAll);
app.get(baseUrl + '/amsTypeLogTypeMaps/GetAll', amsTypeLogTypeMaps.getAll);
app.post(baseUrl + '/ChangeRequests/Create', changeRequests.create);
app.get(baseUrl + '/ChangeRequests/GetChangeRequests', changeRequests.getChangeRequests);
app.post(baseUrl + '/fileUploads/Verify', fileUploads.verify);
app.post(baseUrl + '/fileUploads/Import', fileUploads.import);
app.get(baseUrl + '/topics/get/:id', topics.get);
app.get(baseUrl + '/topics/find', topics.find);
app.get(baseUrl + '/Status/get/:id', status.get);
// End of API
//.......................
/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
/// error handlers
// development error handler
// will print stacktrace
/*
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
*/
// production error handler
// no stacktraces leaked to user
/*
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});
*/

var debug = require('debug')('my-applicationag');
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});

module.exports = app;