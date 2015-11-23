var React = require('react');
var Backbone = require('backbone');

var NavigationComponent = require('./sub-components/NavigationComponent.js');
var JobListPageComponent = require('./JobListPageComponent.js');
var AddJobPageComponent = require('./AddJobPageComponent.js');
var JobDetailsPageComponent = require('./JobDetailsPageComponent.js');

var JobCollection = require('../collections/JobCollection');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            pageName: 'list',
            id: null
        };
    },
    componentWillMount: function() {
        var self = this;
        this.jobs = new JobCollection();
        // this.jobs.fetch();

        var Router = Backbone.Router.extend({
            routes: {
                '': 'list',
                'list': 'list',
                'add': 'add',
                'details/:id': 'details'
            },
            list: function() {
                self.setState({
                    pageName: 'list'
                });
            },
            add: function() {
                self.setState({
                    pageName: 'add'
                });
            },
            details: function() {
                self.setState({
                    pageName: 'details'
                });
            }
        });
        var r = new Router();
        Backbone.history.start();
    },
    render: function() {
        console.log('render', this.state);
        var pageComponent = null;
        if(this.state.pageName === 'list') {
            pageComponent = <JobListPageComponent jobs={this.jobs} />;
        }
        else if(this.state.pageName = 'details') {
            pageComponent = <JobDetailsPageComponent />;
        }
        else if(this.state.pageName = 'add') {
            pageComponent = <AddJobPageComponent />;
        }

        return (
            <div>
                <NavigationComponent />

                <div>
                    {pageComponent}
                </div>
            </div>

        );
    }
});
