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
    // urlRoot: 'http://tiyfe.herokuapp.com/collections/mike_mathew_fresh_jobs-job_details'
});
