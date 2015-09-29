var React = require('react');
var moment = require('moment');

var NavigationComponent = require('./NavigationComponent.js');
var JobFormComponent = require('./JobFormComponent.js');
var JobTipsComponent = require('./JobTipsComponent.js');
var JobRowComponent = require('./JobRowComponent.js');
var CompanyBoxComponent = require('./CompanyBoxComponent.js');

var JobDetailsModel = require('../models/JobDetailsModel.js');
var CompanyModel = require('../models/CompanyModel.js');

var currentDate = moment();

module.exports = React.createClass({
    jobDetailsModel1: new JobDetailsModel({
        id: 1,
        jobTitle: 'Professional Code Samurai',
        companyName: 'Code Warrior Poets',
        dateCreated: currentDate,
        shortDescription: 'Do you battle code and philosophize about your role in the world? Do you write...',
        jobLocation: 'Dallas, TX',
        keywords: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'React']
    }),
    jobDetailsModel2: new JobDetailsModel({
        id: 2,
        jobTitle: 'Remote Engineer Hipster',
        companyName: 'Vintage Glass House',
        dateCreated: currentDate,
        shortDescription: 'Looking for a node.js champion who loves long bike rides and Warby Parker glasses...',
        jobLocation: 'Austin, TX',
        keywords: ['HTML/CSS', 'node.js', 'JavaScript', 'jQuery', 'Backbone']
    }),
    companyModel1: new CompanyModel({
        id: 1,
        companyName: 'MaxPlay',
        companyLocation: 'Austin, TX',
        companyPicture: '../../images/featured.jpg',
        companyLogo: '../../images/featured-logo.jpg'
    }),
    render: function() {
        return (
            <section>
                <NavigationComponent/>
                <div className="responsive-box">
                    <JobFormComponent/>
                    <JobTipsComponent/>
                </div>
                <div>
                    <JobRowComponent model={this.jobDetailsModel1} />
                    <JobRowComponent model={this.jobDetailsModel2} />
                </div>
                <div>
                    <CompanyBoxComponent model={this.companyModel1} />
                </div>
            </section>
        );
    }
});

