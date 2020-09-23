jQuery(document).ready(function($) {
    $( ".header-search" ).click(function() {
        $(this).addClass('header-search-open');
    });
    $("#owl-example-1").owlCarousel( {
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:1,
                nav:true
            },
            1920:{
                items:1,
                nav:true,
                loop:false
            }
        }
    });
    $("#owl-example-2").owlCarousel( {
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:1,
                nav:true
            },
            1920:{
                items:1,
                nav:true,
                loop:false
            }
        }
    });
    $( ".info-content-btn" ).click(function() {
        $('.info-content-3').addClass('info-content-3-open');
        $('.btn-4').css('display', 'none');
        $('.info-content-4').css('width', '100%');
        $('.info-content-4').css('justify-content', 'center');
    });

});