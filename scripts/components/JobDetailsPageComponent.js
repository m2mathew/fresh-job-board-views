var React = require('react');

var JobDetailsComponent = require('./sub-components/JobDetailsComponent.js');
var CompanyBoxComponent = require('./sub-components/CompanyBoxComponent.js');

/*   <CompanyBoxComponent /> */

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <JobDetailsComponent />

            </div>
        );
    }
});
