'use strict';
var Backbone = require('backbone');
var JobDetailsModel = require('../models/JobDetailsModel');

module.exports = Backbone.Collection.extend ({
    model: JobDetailsModel
    // url: 'http://tiyfe.herokuapp.com/collections/mike_mathew_fresh_jobs-job_details'
});
