'use strict';
var Backbone = require('backbone');
var CompanyModel = require('../models/CompanyModel');

module.exports = Backbone.Collection.extend ({
    model: CompanyModel
    // url: 'http://tiyfe.herokuapp.com/collections/mike_mathew_fresh_jobs-company'
});
