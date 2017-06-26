(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        root.IwcSiteApp = factory();
    }
}(this, function () {