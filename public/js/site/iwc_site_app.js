// IWC Site App
// Javascript app for the IlluminateEd.com site.
// (c)2017 Illuminate Education, LLC.
define('iwc_site_app', [
    'jquery',
    'underscore',
    'backbone',
    'view/main.view',
    'view/index.view',
    'view/about.view',
    'view/mexico.view',
    'view/congo.view',
    'view/media.view',
    'view/contact.view',
    'bootstrap',
], function($, _, Backbone, MainView, IndexView, AboutView, MexicoView, CongoView, MediaView, ContactView) {

    var IwcSiteApp = {

        main_view: null,
        page_view: null,

        init: function() {
            console.log('Initialize Site App.');

            this.main_view = new MainView({
                el: $('body')
            });
            if ($('#page-index').length) {
                this.page_view = new IndexView({
                    el: $('#page-index')
                });
            }
            if ($('#page-about').length) {
                this.page_view = new AboutView({
                    el: $('#page-about')
                });
            }
            if ($('#page-mexico').length) {
                this.page_view = new MexicoView({
                    el: $('#page-mexico')
                });
            }
            if ($('#page-congo').length) {
                this.page_view = new CongoView({
                    el: $('#page-congo')
                });
            }
            if ($('#page-media').length) {
                this.page_view = new MediaView({
                    el: $('#page-media')
                });
            }
            if ($('#page-contact').length) {
                this.page_view = new ContactView({
                    el: $('#page-contact')
                });
            }
        }

    };

    return IwcSiteApp;
    
});