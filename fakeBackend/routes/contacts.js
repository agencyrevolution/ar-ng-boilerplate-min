/* GET: search contacts */
var contacts = [{
    "addressBookId": 1,
    "displayName": "Hung Nguyen \u0026lt;hung@agencyrevolution.com\u0026gt;",
    "email": "hung@agencyrevolution.com",
    "firstName": "Hung",
    "lastName": "Nguyen",
    "id": "1794"
}, {
    "addressBookId": 2,
    "displayName": "Michele Hundt \u0026lt;michele@angrygirl.org\u0026gt;",
    "email": "michele@angrygirl.org",
    "firstName": "Michele",
    "lastName": "Hundt",
    "id": "1985"
}, {
    "addressBookId": 3,
    "displayName": "Test Nguyen \u0026lt;test@agencyrevolution.com\u0026gt;",
    "email": "test@agencyrevolution.com",
    "firstName": "Test",
    "lastName": "Nguyen",
    "id": "1795"
}, {
    "addressBookId": 4,
    "displayName": "Test Hundt \u0026lt;test@angrygirl.org\u0026gt;",
    "email": "test@angrygirl.org",
    "firstName": "Test",
    "lastName": "Hundt",
    "id": "1925"
}, {
    "addressBookId": 05,
    "displayName": "Test Hundt \u0026lt;test@angrygirl.org\u0026gt;",
    "email": "",
    "firstName": "Hung",
    "lastName": "BKIT",
    "id": "1926"
}];
exports.find = function(req, res, next) {
    var matchedContacts = [];
    for (var i = contacts.length - 1; i >= 0; i--) {
        if (contacts[i].firstName.indexOf(req.query.k) >= 0 || contacts[i].lastName.indexOf(req.query.k) >= 0 || contacts[i].email.indexOf(req.query.k) >= 0) {
            matchedContacts.push(contacts[i]);
        }
    };
    res.send(200, matchedContacts);
    next();
};
// save a contact
exports.save = function(req, res, next) {
    if (!req.body.firstName) {
        return res.send(400, "first name is required");
    } else if (!req.body.lastName) {
        return res.send(400, "last name is required");
    } else if (!req.body.email) {
        return res.send(400, "email is required");
    }
    var savedContact = {
        id: Math.floor(Math.random() * 10 + 1),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    };
    contacts.push(savedContact);
    res.send(200, savedContact);
    next();
};