var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="jobform-border-background">
                <div className="jobform-content">
                    <h2>Post your job</h2>
                    <label for="title">Title</label>
                    <input type="text" id="title" />
                    <label for="company-name">Company Name</label>
                    <input type="text" id="company-name" />
                    <label for="location">Location</label>
                    <input type="text" id="location" />
                    <label for="description">Description</label>
                    <textarea name="textarea" id="description"/>
                    <label for="title">Tags</label>
                    <input type="text" id="title" />
                    <div className="button-container">
                        <button className="submit-button">Submit Job</button>
                    </div>

                </div>
            </div>
        );
    }
});

