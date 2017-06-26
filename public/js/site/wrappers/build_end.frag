    define('jquery', function() {
        return jQuery;
    });
    define('underscore', function() {
        return _;
    });
    define('backbone', function() {
        return Backbone;
    });
    define('fastclick', function() {
        return FastClick;
    });
    define('js-cookie', function() {
        return Cookies;
    });

    define('bootstrap', function() {});

    return require('iwc_site_app');
}));
$(function() {
   IwcSiteApp.init();
});