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
    // urlRoot: 'https://jmingus-server.herokuapp.com/collections/mike_mathew_freshjob_company'
});
