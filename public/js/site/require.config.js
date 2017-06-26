require.config({
    baseUrl: './js/site',

    paths: {
        'backbone'                : '../../libs/backbone/backbone',
        'bootstrap'               : '../../libs/bootstrap/dist/js/bootstrap',
        'jquery'                  : '../../libs/jquery/dist/jquery',
        'js-cookie'               : '../../libs/js-cookie/src/js.cookie',
        'requirejs'               : '../../libs/requirejs/require',
        'underscore'              : '../../libs/lodash/lodash'
    },

    shim: {
        'jquery': {
            exports: '$'
        },
        'backbone': {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery']
        }
    },

    // Cache busting the JS files so we make sure to get the latest an greatest.
    urlArgs: 'bust=' + (new Date()).getTime(),
    // If a script doesn't load within this timeframe, abort...
    waitSeconds: 30,

    deps: ['jquery', 'iwc_site_app'],
    callback: function($, IwcSiteApp) {
        $(function() {
            window.IwcSiteApp = IwcSiteApp;
            IwcSiteApp.init();
        });
    }
});