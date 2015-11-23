'use strict';

var React = require('react');
var Backbone = require('backbone');
var AppComponent = require('./components/AppComponent.js');

var mainElement = document.getElementById('main-content');

React.render(
    <div>
        <AppComponent />
    </div>,
    mainElement
);
