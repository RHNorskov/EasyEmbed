(function ($) {
    $.fn.embed = function (options) {
        var settings = $.extend({
            id: this.data('id') || "ScMzIvxBSi4",
            width: this.data('width') || 640,
            height: this.data('height') || 360,
            responsive: this.data('responsive') || true
        }, options);

        var el = this;
        var image = new Image(); // initialize empty image
        var imageURL = '//img.youtube.com/vi/' + settings.id + '/'; // base youtube image url

        // click any element inside the embed container
        el.find('*').addBack().click(function () {
            // write iframe with youtube video
            $(el).html($('<iframe>')
                .attr('width', '100%')
                .attr('height', '100%')
                .attr('src', '//youtube.com/embed/' + settings.id + '?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0')
                .attr('frameborder', 0))
        });

        // when image is loaded
        image.onload = function () {
            // if image is the 404 thumbnail
            if (this.width == 120 && this.height == 90) {
                // video does not have HD thumb get default
                setImage(imageURL.concat('0.jpg'))
            } else {
                // video does have a HD thumb
                setImage(imageURL.concat('maxresdefault.jpg'))
            }

            setSize();
        };

        // try max resolution image
        image.src = imageURL.concat('maxresdefault.jpg');

        function setImage(url) {
            // set url as background image
            el.css('background', '#000000 url(' + url + ') 50% 50% / cover no-repeat');
        }

        function setSize() {
            // if responsive is enabled
            if (settings.responsive) {
                // calculate height from width:height ratio
                el.css('height', el.width() / settings.width * settings.height);
            }
            // if responsive id disabled
            else {
                // set width and height
                el.css({
                    width: settings.width,
                    height: settings.height
                })
            }
        }

        // update size on resize
        $(window).resize(function () {
            setSize();
        })
    };
})(jQuery);