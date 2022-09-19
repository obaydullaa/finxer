(function ($) {
    "use strict";

    /*============** Sticky Header **============*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 280) {
            $("#sticky-header").removeClass("sticky");
        } else {
            $("#sticky-header").addClass("sticky");
        }
    });    

    /*============** meanmenu **============*/
    $('#mobile-nav').meanmenu({
      meanMenuContainer: '.mobile-nav',
      meanScreenWidth: "991",
      meanMenuOpen: '<span></span><span></span><span></span>',
    });

    /*============**  Circlechart **============*/
      $('.circlechart').circlechart(); 
        
    /*============** Brand Active  **============*/
    $(".brand-active").owlCarousel({
      loop: true,
      margin: 30,
      items:4,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ],
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 2
        },
        767: {
          items: 3
        },
        992: {
          items: 4
        }
      }
    });

    /*============** Testimonials **============*/
    $(".testimonials-active").owlCarousel({
      loop: true,
      margin: 0,
      items:1,
      navText: [
        '<i class="fas fa-long-arrow-alt-left"></i>',
        '<i class="fas fa-long-arrow-alt-right"></i>',
      ],
      nav: true,
      dots: true,
      responsive: {
        0: {
          items: 1
        },
        767: {
          items: 1
        },
        992: {
          items: 1
        }
      }
    });

    /*============** Testimonials **============*/
    $(".blog-slider").owlCarousel({
      loop: true,
      margin: 0,
      items:1,
      navText: [
        '<i class="fas fa-long-arrow-alt-left"></i>',
        '<i class="fas fa-long-arrow-alt-right"></i>',
      ],
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        767: {
          items: 1
        },
        992: {
          items: 1
        }
      }
    });
    /*============** Skill bar  **============*/
        var skillbar = $('.skillbar');
        if(skillbar.length) {
            $('.skillbar').skillBars({  
                from: 0,    
                speed: 3500,    
                interval: 100,  
                decimals: 0,    
            });
        }

    /*============** Nice Select **============*/
      $('select').niceSelect();    

    /*============** Sidebar Menu **============*/
    $( ".sidebar-menu .submenu" ).before( '<i class="fas fa-angle-down switch"></i>' );

    $(".sidebar-menu li i.switch").on( 'click', function() {
        var $submenu = $(this).next(".submenu");
        $submenu.slideToggle(300);
        $submenu.parent().toggleClass("openmenu");
    });

    //  Menu Bar
    $(".header-bar").on( 'click', function() {
      $(".sidebar-menu-area").toggleClass("open");
      $(".wrapper-site-overlay").toggleClass("active");
    });

    $(".sidebar-menu-area .btn-close, .wrapper-site-overlay").on( 'click', function() {
      $(".sidebar-menu-area").removeClass("open");
      $(".wrapper-site-overlay").removeClass("active");
    });

    /*============** Mgnific Popup **============*/
    $(".image-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    $('.popup_video').magnificPopup({
      type: 'iframe',
    });

      /*============**  Scroll-To-Top  **============*/
      $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-level-up-alt"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

      /*============** Preloader **============*/
    $(window).on('load', function() {
      $("#loading").fadeOut(500);
    })

    /*============** Aos **============*/
    AOS.init({
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 2000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
    
})(jQuery);