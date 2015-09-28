'use strict';

var React = require('react');
var Backbone = require('backbone');
var AppComponent = require('./components/AppComponent.js');

var mainElement = document.getElementById('main-content');

// var Router = Backbone.Router.extend({
//         routes: {
//             '': 'showRestaurants',
//             'restaurants': 'showRestaurants',
//             'login': 'goToLogin',
//             'parking': 'restaurantDetails'
//         },
//         showRestaurants: function() {
//             console.log('restraurants link clicked');
//             $('section').hide();
//             $restaurants.show();
//         },
//         goToLogin: function() {
//             console.log('login link clicked');
//             $('section').hide();
//             $login.show();
//         },
//     });

//     var r = new Router();
//     Backbone.history.start();

React.render(
    <div>
        <AppComponent/>
    </div>,
    mainElement
);
