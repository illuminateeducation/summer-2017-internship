define([
    'jquery',
    'underscore',

    'view/abstract.view'
], function($, _, AbstractView) {

    var MexicoView = AbstractView.extend({

        events: function() {
            return _.extend(AbstractView.prototype.events.call(this), {
            });
        },

        initialize: function() { },

        render: function() { },

    });

    return MexicoView;

});