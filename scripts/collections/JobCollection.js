'use strict';
var Backbone = require('backbone');
var JobModel = require('../models/JobModel');

module.exports = Backbone.Collection.extend ({
    model: JobModel
    // url: 'https://jmingus-server.herokuapp.com/collections/mike_mathew_freshjob_job_listing'
});
