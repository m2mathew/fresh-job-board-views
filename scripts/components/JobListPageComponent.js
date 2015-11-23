var React = require('react');

var FilterBoxComponent = require('./sub-components/FilterBoxComponent.js');
var JobRowComponent = require('./sub-components/JobRowComponent.js');
var InformationBoxComponent = require('./sub-components/InformationBoxComponent.js');
var CompanyBoxComponent = require('./sub-components/CompanyBoxComponent.js');

module.exports = React.createClass({
    componentWillMount: function() {
        var self = this;
        this.props.jobs.on('sync', function() {
            self.forceUpdate();
        });
    },
    render: function() {
        console.log('job list page render', this.props);

        var jobRows = this.props.jobs.map(function(job) {
            return (
                <JobRowComponent job={job} />
            );
        });

        return (
            <div>
                <div>
                    <FilterBoxComponent />
                    {jobRows}
                </div>
                <div>
                    <InformationBoxComponent />
                  /*  <CompanyBoxComponent /> */
                </div>
            </div>
        );
    }
});
