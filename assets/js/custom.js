jQuery(document).ready(function () {
  // sticky_header
  jQuery(function () {
    var shrinkHeader = 2
    jQuery(window).scroll(function () {
      var scroll = getCurrentScroll()
      if (scroll >= shrinkHeader) {
        jQuery("header").addClass("sticky")
      } else {
        jQuery("header").removeClass("sticky")
      }
    })

    function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop
    }
  })

  // Responsive_navigation
  jQuery(".menu_btn").click(function () {
    jQuery("body").toggleClass("mobile_menu_active")
    jQuery(".overlay").click(function () {
      jQuery("body").removeClass("mobile_menu_active")
    })
  })

  // Sub_menu
  jQuery(".hdr_menu ul li.menu-item-has-children > a").after(
    "<div class='sub_menu_opener'><i class='las la-angle-down'></i></div>"
  )
  jQuery(".sub_menu_opener").click(function () {
    jQuery(".hdr_menu .sub-menu").slideUp()
    jQuery("body").removeClass("sub_menu_active")
    if (jQuery(this).parent().find(".sub-menu").css("display") == "none") {
      jQuery(this).parent().find(".sub-menu").slideDown()
      jQuery("body").addClass("sub_menu_active")
    } else {
      jQuery(this).parent().find(".sub-menu").slideUp()
      jQuery("body").removeClass("sub_menu_active")
    }
  })

  jQuery(".sub_menu_opener").click(function () {
    if (jQuery(this).parents(".hdr_menu ul > li").hasClass("sub_menu_open")) {
      jQuery(this).parents(".hdr_menu ul > li").removeClass("sub_menu_open")
    } else {
      jQuery(".hdr_menu ul > li").removeClass("sub_menu_open")
      jQuery(this).parents(".hdr_menu ul > li").addClass("sub_menu_open")
    }
  })

  // show_modal
  // jQuery("#case_study_dtls_modal").modal({})

  // Scroll_top_top
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > 100) {
      jQuery(".scrollup").addClass("active")
    } else {
      jQuery(".scrollup").removeClass("active")
    }
  })

  jQuery(".scrollup").on("click", function () {
    jQuery("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    )
    return false
  })
  // AOS
  /*jQuery(function () {
        AOS.init({
            once: false,
            throttleDelay: 0,
            offset: 0,
            disable: function () {
                var maxWidth = 768;
                return window.innerWidth < maxWidth;
            }
        });
    });
    let scrollRef = 0;

    window.addEventListener('scroll', function () {
        // increase value up to 10, then refresh AOS
        scrollRef <= 10 ? scrollRef++ : AOS.refresh();
    });*/
  // Project Slider
  new Swiper(".projectSlider", {
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 0,
    slideToClickedSlide: true,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    speed: 1000,
    // loopAdditionalSlides: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      318: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
      },
    },
  })
  new Swiper(".projectGallerySlider", {
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 0,
    slideToClickedSlide: true,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    speed: 1000,
    // loopAdditionalSlides: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      318: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
      },
    },
  })

  // Location Slider
  new Swiper(".bannerSlider", {
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 0,
    slideToClickedSlide: true,
    loop: true,
    speed: 1000,
    // loopAdditionalSlides: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  })
  // Service Slider
  new Swiper(".service-slider-outer .swiper", {
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 0,
    slideToClickedSlide: true,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      318: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
      },
    },
  })
  // Testimonial Slider
  new Swiper(".testimonial-slider-outer .swiper", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
    speed: 1000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".testimonial-slider-outer .swiper-pagination",
      clickable: true,
    },
  })
  // Testimonial Slider
  new Swiper(".serviceGallerySliderOuter .swiper", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 20,
    speed: 1000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".serviceGallerySliderOuter .swiper-pagination",
      clickable: true,
    },
  })

  // tabCumAccordian
  jQuery(".tabPan").prepend('<span class="tabTitleHead"></span>')
  jQuery(".tabNav li").each(function () {
    var index = jQuery(this).index()
    var tdt = jQuery(this).text()
    jQuery(this)
      .closest(".tabCumAccordian")
      .find(".tabPan")
      .eq(index)
      .children(".tabTitleHead")
      .text(tdt)
  })
  jQuery(".tabNav li:first-child, .tabPan:first-child .tabTitleHead").addClass(
    "active"
  )
  jQuery(".tabPan .tabInner").hide()
  jQuery(".tabPan:first-child .tabInner").show()
  jQuery(".tabNav li").click(function () {
    var index = jQuery(this).index()
    jQuery(this).siblings().removeClass("active")
    jQuery(this).addClass("active")
    jQuery(this)
      .closest(".tabNav")
      .next(".tabMain")
      .find(".tabPan .tabInner")
      .hide()
    jQuery(this)
      .closest(".tabNav")
      .next(".tabMain")
      .find(".tabPan .tabTitleHead")
      .removeClass("active")
    jQuery(this)
      .closest(".tabNav")
      .next(".tabMain")
      .find(".tabPan")
      .eq(index)
      .children(".tabInner")
      .show()
    jQuery(this)
      .closest(".tabNav")
      .next(".tabMain")
      .find(".tabPan")
      .eq(index)
      .find(".tabTitleHead")
      .addClass("active")
    return false
  })
  jQuery(".tabTitleHead").click(function () {
    var index = jQuery(this).parent(".tabPan").index()
    jQuery(this)
      .parent(".tabPan")
      .siblings(".tabPan")
      .children(".tabInner")
      .slideUp(200)
    jQuery(this).next(".tabInner").slideToggle(200)
    jQuery(this)
      .closest(".tabMain")
      .prev(".tabNav")
      .find("li")
      .removeClass("active")
    jQuery(this)
      .closest(".tabMain")
      .prev(".tabNav")
      .find("li")
      .eq(index)
      .toggleClass("active")
    jQuery(this)
      .parent(".tabPan")
      .siblings()
      .find(".tabTitleHead")
      .removeClass("active")
    jQuery(this).toggleClass("active")
  })
  jQuery(".tabImage").hide()
  jQuery(".tabImage:first-child").show()
  var tabImg = jQuery(".tabWithImage")
  if (tabImg.length) {
    jQuery(".tabLink").click(function () {
      var index = jQuery(this).index()
      jQuery(this).closest(".tabWithImage").find(".tabImage").eq(index).show()
      jQuery(this)
        .closest(".tabWithImage")
        .find(".tabImage")
        .eq(index)
        .siblings()
        .hide()
    })
  }
  //filter
  jQuery(".filters ul li").click(function () {
    jQuery(".filters ul li").removeClass("activefilter")
    jQuery(this).addClass("activefilter")

    var data = jQuery(this).attr("data-filter")
    $grid.isotope({
      filter: data,
    })
  })

  var $grid = jQuery(".grid").isotope({
    itemSelector: ".all",
    percentPosition: true,
    masonry: {
      columnWidth: ".all",
    },
  })
  // Function to check if all items are visible and add/remove class
  function checkAllVisible() {
    var totalItems = $grid.data("isotope").items.length
    var visibleItems = $grid.isotope("getFilteredItemElements").length

    // If all items are visible, add the 'all-visible' class
    if (visibleItems === totalItems) {
      $(".grid").addClass("all-visible")
    } else {
      $(".grid").removeClass("all-visible")
    }
  }

  // Run check when Isotope is initialized and items are laid out
  $grid.on("arrangeComplete", function () {
    checkAllVisible() // Check visibility on each filtering action
  })

  // Run the check on initial page load
  checkAllVisible()

  // Filter items on button click
  $(".filter-buttons").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter")
    $grid.isotope({ filter: filterValue })
  })
  var wpcf7Elm = document.querySelector(".getInTouchWrapper .wpcf7")

  wpcf7Elm.addEventListener(
    "wpcf7submit",
    function (event) {
      jQuery(
        "<span class='wpcf7-not-valid-tip' aria-hidden='true'>Please fill out this field.</span>"
      ).insertAfter(".formSelectionFieldOuter")
    },
    false
  )

  // Replace '#your-checkbox' with the selector for your checkbox
  jQuery(".formSelectionField  input").on("change", function () {
    // Replace '.your-target-element' with the selector for the element you want to add the class to
    if (jQuery(this).is(":checked")) {
      jQuery(this).parents(".formRow").addClass("isValid")
    } else {
      jQuery(this).parents(".formRow").removeClass("isValid")
    }
  })
})
