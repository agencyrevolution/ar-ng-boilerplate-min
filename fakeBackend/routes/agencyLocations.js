exports.getAll = function(req, res, next) {
    res.send(200, [{
        "agencyLocationId": 12,
        "agencyLocationDesc": "McClain - HawkSoft - Everett",
        "agencyLocationKey": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "dateCreated": "2010-03-25T15:40:23",
        "dateModified": "2013-06-21T16:46:10.6",
        "portalId": 0,
        "moduleId": 1460,
        "triggerPointsEnabled": true,
        "enabled": true
    }, {
        "agencyLocationId": 42,
        "agencyLocationDesc": "Test Location 2",
        "agencyLocationKey": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "dateCreated": "2010-10-22T16:35:27.4",
        "dateModified": "2013-03-04T20:08:51.357",
        "portalId": 0,
        "moduleId": 1460,
        "triggerPointsEnabled": false,
        "enabled": true
    }]);
};