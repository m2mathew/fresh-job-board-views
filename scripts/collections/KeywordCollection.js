'use strict';
var Backbone = require('backbone');
var KeywordModel = require('../models/KeywordModel');

module.exports = Backbone.Collection.extend ({
    model: KeywordModel
    // url: 'http://tiyfe.herokuapp.com/collections/mike_mathew_fresh_jobs-keyword'
});
