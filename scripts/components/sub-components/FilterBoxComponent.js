var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="filter-box">
                <label className="filter-search-label" for="keyword-input">Keywords</label>
                <input className="filter-search-input-keywords" type="text" name="keyword-input" />
                <label className="filter-search-label" for="keyword-input">Location</label>
                <input className="filter-search-input-location" type="text" name="keyword-input" />
                <button>Search</button>
            </div>
        );
    }
});
