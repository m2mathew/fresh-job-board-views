var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {
        id: null,
        companyName: '',
        companyLocation: '',
        contactPerson: '',
        contactEmail: '',
        companyLogo: '',
        companyPicture: '',
        numberOfEmployess: null
    }
    // urlRoot: 'http://tiyfe.herokuapp.com/collections/mike_mathew_fresh_jobs-company'
});
