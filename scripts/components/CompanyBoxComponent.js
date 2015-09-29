var React = require('react');

var CompanyModel = require('../models/CompanyModel.js');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="company-box-container">

                <div className="company-picture">
                    <div>Company Information</div>
                </div>

                <div>
                    <img className="feature-pic" src={this.props.model.get('companyPicture')}/>
                </div>

                <div>
                    <img className="logo-pic" src={this.props.model.get('companyLogo')}/>
                </div>

            </div>
        );
    }
});
