var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {
        id: null,
        jobTitle: '',
        companyName: '',
        dateCreated: new Date(),
        dateExpires: '',
        jobLocation: '',
        shortDescription: '',
        longDescription: '',
        qualifications: '',
        keywords: []
    }
    // urlRoot: 'https://jmingus-server.herokuapp.com/collections/mike_mathew_freshjob_job_listing'
});
