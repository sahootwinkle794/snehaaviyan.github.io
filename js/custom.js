$(document).ready(function() {
    var autoplaySlider = $('#autoplay').lightSlider({
        auto:true,
        loop:true,
        pauseOnHover: true,
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        } 
    });
    $('#total').text(autoplaySlider.getTotalSlideCount());
});

/*id=autoplay1*/
$(document).ready(function() {
    $('#autoplay1').lightSlider({
        auto:true,
        loop:true,
        pauseOnHover: true,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:2
                  }
            }
        ],
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        } 
    });  
  });


/*id=autoplay2*/

$(document).ready(function() {
    $('#autoplay2').lightSlider({
        auto:true,
        loop:true,
        pauseOnHover: true,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:2
                  }
            }
        ],
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        } 
    });  
  });

/*id= responsive*/
$(document).ready(function() {
    $('#responsive').lightSlider({
        item:3,
        loop:false,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:2
                  }
            }
        ]
    });  
  });

/*light gallery */
lightGallery(document.getElementById('animated-thumbnails-gallery'), {
    thumbnail: true,
});


