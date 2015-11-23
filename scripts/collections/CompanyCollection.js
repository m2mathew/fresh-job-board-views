var Backbone = require('backbone');
var CompanyModel = require('../models/CompanyModel');

module.exports = Backbone.Collection.extend ({
    model: CompanyModel
    // url: 'https://jmingus-server.herokuapp.com/collections/mike_mathew_freshjob_company'
});
