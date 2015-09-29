var React = require('react');

var CompanyModel = require('../models/CompanyModel.js');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="company-box-container">

                <div className="company-box-title">Company Information</div>

                <div className="feature-pic-container">
                    <img className="feature-pic" src={this.props.model.get('companyPicture')}/>
                </div>

                <div className="logo-pic-container">
                    <img className="logo-pic" src={this.props.model.get('companyLogo')}/>
                </div>

                <div className="company-box-info-container">
                    <div className="company-box-name">
                        <a href="#" >{this.props.model.get('companyName')}</a>
                    </div>
                    <div className="company-box-location">{this.props.model.get('companyLocation')}
                    </div>
                </div>

            </div>
        );
    }
});
