var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <nav className="navigation-container">
                <div className="logo"><a href="#" className="home-link">Fresh Jobs</a></div>
                <a href="#">Jobs</a>
                <a href="#">Companies</a>
                <a href="#">Cities</a>
                <a href="#">Why Fresh?</a>
                <a href="#">For Employers</a>
            </nav>
        );
    }
});

