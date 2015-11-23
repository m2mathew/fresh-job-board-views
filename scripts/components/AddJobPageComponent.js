var React = require('react');
var moment = require('moment');

var JobFormComponent = require('./sub-components/JobFormComponent.js');
var JobTipsComponent = require('./sub-components/JobTipsComponent.js');

var JobModel = require('../models/JobModel.js');

var currentDate = moment();

module.exports = React.createClass({
    render: function() {
        return (
            <section>
                <div className="responsive-box">
                    <JobFormComponent/>
                    <JobTipsComponent/>
                </div>
            </section>
        );
    }
});

/*  companyModel1: new CompanyModel({
        id: 1,
        companyName: 'MaxPlay',
        companyLocation: 'Austin, TX',
        companyPicture: '../../images/featured.jpg',
        companyLogo: '../../images/featured-logo.jpg'
    })
*/
