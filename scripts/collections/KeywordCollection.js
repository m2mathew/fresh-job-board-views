'use strict';
var Backbone = require('backbone');
var KeywordModel = require('../models/KeywordModel');

module.exports = Backbone.Collection.extend ({
    model: KeywordModel
    // url: 'https://jmingus-server.herokuapp.com/collections/mike_mathew_freshjob_keywords'
});
