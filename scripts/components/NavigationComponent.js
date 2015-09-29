var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <nav className="navigation-container">
                <div className="logo">
                    <a href="#" className="home-link">Fresh Jobs</a>
                </div>
                <div className="link-container">
                    <div className="nav-anchor"><a href="#">Jobs</a></div>
                    <div className="nav-anchor"><a href="#">Companies</a></div>
                    <div className="nav-anchor"><a href="#">Cities</a></div>
                    <div className="nav-anchor"><a href="#">Why Fresh?</a></div>
                    <div className="nav-anchor"><a href="#">For Employers</a></div>
                </div>
            </nav>
        );
    }
});

