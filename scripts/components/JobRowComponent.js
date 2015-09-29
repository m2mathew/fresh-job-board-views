var React = require('react');
var moment = require('moment');

var JobDetailsModel = require('../models/JobDetailsModel.js');

module.exports = React.createClass({
    render: function() {
        var keywordsArray = this.props.model.get('keywords');
        var newArray = [];

        for(var i = 0; i < keywordsArray.length; i++) {
            newArray.push(keywordsArray[i]);
        };

        var dateCreated = this.props.model.get('dateCreated');

        return (
            <div className="job-row-container">

                <div className="job-row-top">
                    <span>
                        <a href="#" className="job-row-title">
                            {this.props.model.get('jobTitle')}
                        </a>
                    </span>
                    <span className="job-row-time-stamp">
                        {moment(dateCreated).fromNow()}
                    </span>
                </div>

                <div className="job-row-bottom">
                    <div className="job-row-company">
                        {this.props.model.get('companyName')}<span>&#160;·&#160;</span>
                    </div>
                    <div className="job-row-location">
                        {this.props.model.get('jobLocation')}
                    </div>
                </div>

                <div className="job-row-text">{this.props.model.get('jobTitle')}&#160;-&#160;{this.props.model.get('shortDescription')}
                </div>

                <div className="job-row-keywords-container">
                    <a href="#" className="job-row-keywords">{newArray[0]}</a>
                    <a href="#" className="job-row-keywords">{newArray[1]}</a>
                    <a href="#" className="job-row-keywords">{newArray[2]}</a>
                    <a href="#" className="job-row-keywords">{newArray[3]}</a>
                    <a href="#" className="job-row-keywords">{newArray[4]}</a>
                </div>

            </div>
        );

    }
});
