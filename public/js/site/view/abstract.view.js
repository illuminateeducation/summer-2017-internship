define([
    'backbone',
    'underscore',
    'jquery',
    'js-cookie'
], function(Backbone, _, $, Cookies) {

    // Creating a base abstraction for all learning tool views.
    // This will get loaded up with more functionality as the app grows.
    var AbstractView = Backbone.View.extend({

        events: function() {
            return {};
        }

    });

    return AbstractView;

});