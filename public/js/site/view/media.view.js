define([
    'jquery',
    'underscore',

    'view/abstract.view'
], function($, _, AbstractView) {

    var MediaView = AbstractView.extend({

        events: function() {
            return _.extend(AbstractView.prototype.events.call(this), {
            });
        },

        initialize: function() { 
            console.log('Initializing Media Page');
            
            var image_arr = $('.image-row .col-sm-3 img'),
                image_counter = 0;
                
            $('#image-flipper').attr('src', $(image_arr[0]).attr('src').replace('/thumbs', ''));
            setInterval(function() {
                image_counter++;
        
                if (image_counter > image_arr.length) {
                    image_counter = 0;
                }
                var image_src = $(image_arr[image_counter]).attr('src').replace('/thumbs', '');
                $('#image-flipper').attr('src', image_src);    
            }, 5000);
        
            $('.image-row .col-sm-3 img').on('click', function(ev) {
                var image_src = $(ev.currentTarget).attr('src').replace('/thumbs', ''),
                    image_title = $(ev.currentTarget).attr('title');
        
                $('#picture-modal .modal-title').html(image_title);
                $('#picture-modal .modal-body').html('<img src="' + image_src + '" />')
                $('#picture-modal').modal('show');
            });
        },

        render: function() { },

    });

    return MediaView;

});