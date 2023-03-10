(function ($) {
"use strict";

/*=============================================
    =    		 Preloader			      =
=============================================*/
function preloader() {
	$('#preloader').delay(0).fadeOut();
};

$(window).on('load', function () {
	preloader();
	mainSlider();
	textAnimation();
	aosAnimation();
	wowAnimation();
});


/*=============================================
    =          Menu Bottom Line			      =
=============================================*/
function menu_bottom_line_active() {
	var off = $('#mobile-menu > ul > li.show').offset(),
		left = off.left,
		right = $(window).width() - left - $('#mobile-menu > ul > li.show').width() + $('#mobile-menu > ul > li.show').width();

	$('<style>.navbar-wrap > ul > li.show > a::after{width:' + right + 'px;}</style>').appendTo("head");
}

menu_bottom_line_active();

// Menu bottom line
function menu_bottom_line() {

	$("#mobile-menu > ul > li").mouseover(function () {

		if ($("#mobile-menu > ul > li").hasClass("active")) {
			$(this).removeClass('active');
		}

		$(this).addClass('active');

		var off = $('#mobile-menu > ul > li.active').offset(),
			left = off.left,
			right = $(window).width() - left - $('#mobile-menu > ul > li.active').width() + $('#mobile-menu > ul > li.active').width();

		$('<style>.navbar-wrap > ul > li.active > a::after,.navbar-wrap > ul > li:hover > a::after{width:' + right + 'px;}</style>').appendTo("head");
	});

	$("#mobile-menu > ul > li").mouseleave(function () {
		$(this).removeClass('active');
	});

}

menu_bottom_line();


/*=============================================
    =    		Mobile Menu			      =
=============================================*/
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});


/*=============================================
    =     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
	} else {
		$("#sticky-header").addClass("sticky-menu");
	}
});



/*=============================================
    =    		 Main Slider		      =
=============================================*/
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/arrow_left.png" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/icon/arrow_right.png" alt=""></button>',
		responsive: [
			{ breakpoint: 1200, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}



/*=============================================
    =    		Brand Active		      =
=============================================*/
$('.brand-active').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    },
  ]
});



/*=============================================
    =    		Brand Active		      =
=============================================*/
$('.s-brand-active').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    },
  ]
});


/*=============================================
    =    		Released Game Active		      =
=============================================*/
$('.new-released-game-active').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
  ]
});

/*=============================================
	=         Game-gallery-active           =
=============================================*/
$('.game-gallery-active').slick({
	centerMode: true,
	centerPadding: '350px',
	slidesToShow: 1,
	prevArrow: '<span class="slick-prev"><i class="fas fa-caret-left"></i> vorige</span>',
	nextArrow: '<span class="slick-next">Volgende <i class="fas fa-caret-right"></i></span>',
	appendArrows: ".slider-nav",
	responsive: [
		{
			breakpoint: 1800,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '220px',
				infinite: true,
			}
		},
		{
			breakpoint: 1500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '180px',
				infinite: true,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '160px',
				arrows: false,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				centerPadding: '60px',
				arrows: false,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '0px',
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '0px',
				arrows: false,
			}
		},
	]
});


/*=============================================
	=         		PAGE LINKS           =
=============================================*/
// Define an object containing the links and their IDs
var links = {

	//Main Links
	'home': {
	  'id': 'home-link',
	  'href': 'index.html'
	},
	'discord': {
	  'id': 'discord-link',
	  'href': 'https://discord.gg/Kbb4BXhVgh'
	},
	'doneren': {
		'id': 'doneren-link',
		'href': 'doneren.html'
	  },
	'fotoalbum': {
	  'id': 'fotoalbum-link',
	  'href': 'fotoalbum.html'
	},
	'videos': {
	  'id': 'videos-link',
	  'href': 'videos.html'
	},
	'wetboek': {
		'id': 'wetboek-link',
		'href': 'wetboek.html'
	},
	'fivem': {
		'id': 'fivem-link',
		'href': 'https://fivem.net/'
	},
	'cfx': {
		'id': 'cfx-link',
		'href': 'https://cfx.re/join/bdmdx4'
	},

	//Donatie Paketten
	'BronzeDonatie': {
		'id': 'bronzed-link',
		'href': 'https://dtr.tebex.io/package/5190876'
	},
	'BronzeDonatiePagina': {
		'id': 'bronzedp-link',
		'href': 'bronze_pakket.html'
	},
	'ZilverDonatie': {
		'id': 'zilverd-link',
		'href': 'https://dtr.tebex.io/package/5190860'
	},
	'ZilverDonatiePagina': {
		'id': 'zilverdp-link',
		'href': 'zilver_pakket.html'
	},
	'GoldDonatie': {
		'id': 'goldd-link',
		'href': 'https://dtr.tebex.io/package/5190845'
	},
	'GoldDonatiePagina': {
		'id': 'golddp-link',
		'href': 'gold_pakket.html'
	},
	'DiamondDonatie': {
		'id': 'diamondd-link',
		'href': 'https://dtr.tebex.io/package/5190802'
	},
	'DiamondDonatiePagina': {
		'id': 'diamonddp-link',
		'href': 'diamond_pakket.html'
	},
	'PlatinumDonatie': {
		'id': 'platinumd-link',
		'href': 'https://dtr.tebex.io/package/5190906'
	},
	'PlatinumDonatiePagina': {
		'id': 'platinumdp-link',
		'href': 'platinum_pakket.html'
	},
	'SupremeDonatie': {
		'id': 'supremed-link',
		'href': 'https://dtr.tebex.io/package/5190903'
	},
	'SupremeDonatiePagina': {
		'id': 'supremedp-link',
		'href': 'supreme_pakket.html'
	},
	'EliteDonatie': {
		'id': 'elited-link',
		'href': 'https://dtr.tebex.io/package/5190902'
	},
	'EliteDonatiePagina': {
		'id': 'elitedp-link',
		'href': 'elite_pakket.html'
	},
	'DeluxeDonatie': {
		'id': 'deluxed-link',
		'href': 'https://dtr.tebex.io/package/5190897'
	},
	'DeluxeDonatiePagina': {
		'id': 'deluxedp-link',
		'href': 'deluxe_pakket.html'
	},
  };
  
// Loop through each link in the object
for (var link in links) {
	// Get all elements with the ID
	var elems = document.querySelectorAll("#" + links[link].id);
  
	// Loop through each element
	for (var i = 0; i < elems.length; i++) {
		// Update the href attribute
		elems[i].href = links[link].href;
	}
}


/*=============================================
	=           DONATION PRICES           =
=============================================*/
document.addEventListener("DOMContentLoaded", function() {
    // Define the product prices
    var productPrices = {
      diamonddp: "€74.99",
      golddp: "€49.99",
      zilverdp: "€29.99",
      bronzedp: "€14.99",
      platinumdp: "€14.99",
      supremedp: "€29.99",
      elitedp: "€49.99",
      deluxedp: "€99.99"
    };
  
    // Find all elements with a product price ID and update their innerHTML
    var priceElements = document.querySelectorAll("[id$='-price']");
    priceElements.forEach(function(priceElement) {
      var id = priceElement.getAttribute("id").replace("-price", "");
      if (id in productPrices) {
        priceElement.innerHTML = productPrices[id];
      }
    });
  });
  

/*=============================================
    =    		Product Active		      =
=============================================*/
$('.product-active').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: false,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
  ]
});


/*=============================================
    =    		Product Active		      =
=============================================*/
$('.game-episodes-active').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: false,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
		dots: false,
      }
    },
  ]
});



/*=============================================
    =    		Testimonial Active		     =
=============================================*/
$('.testimonial-active').owlCarousel({
	loop: true,
	margin: 0,
	items: 1,
	autoplay: false,
	autoplayTimeout: 5000,
	autoplaySpeed: 1000,
	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	nav: true,
	dots: false,
	responsive: {
		0: {
			items: 1,
			center: false,
		},
		575: {
			items: 1,
			center: false,
		},
		768: {
			items: 1,
			center: false,
		},
		992: {
			items: 1,
			center: false,
		},
		1200: {
			items: 1
		},
	}
})


/*=============================================
    =    		Latest Games		      =
=============================================*/
$('.latest-games-active').owlCarousel({
	loop: true,
	margin: 30,
	items: 3,
	autoplay: false,
	autoplayTimeout: 5000,
	autoplaySpeed: 1000,
	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	nav: true,
	dots: false,
	responsive: {
		0: {
			items: 1,
			center: false,
			nav: false,
		},
		575: {
			items: 1,
			center: false,
		},
		768: {
			items: 2,
			center: false,
		},
		992: {
			items: 3,
			center: false,
		},
		1200: {
			items: 3
		},
	}
})


/*=============================================
    =    		Text Animation		      =
=============================================*/
function textAnimation() {
	$('.tlt').textillate({
		in: {
			delayScale: 4,
			delay: 40,
			callback: function () { }
		},
	});
}


/*=============================================
    =      Released Game Active 	      =
=============================================*/
$('.released-game-active').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	dots: true,
	asNavFor: '.released-game-nav',
	responsive: [
		{
			breakpoint: 767,
			settings: {
				arrows: false,
				dots: false,
			}
		},
	]
});
$('.released-game-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.released-game-active',
	dots: false,
	arrows: false,
	centerMode: false,
	centerPadding: '0px',
	vertical: true,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				vertical: false,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				vertical: false,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
				vertical: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				vertical: false,
			}
		},
	]
});



/*=============================================
	=        Banner Magazine Active      =
=============================================*/
$('.banner-magazine-active').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: false,
	centerMode: true,
	centerPadding: '0',
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 2,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
			}
		},
	]
});



/*=============================================
	=        Trending News Active      =
=============================================*/
$('.trending-news-active').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	vertical: true,
	prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
	appendArrows: '.trending-news-nav',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
			}
		},
	]
});


/*=============================================
	=        Business News Active      =
=============================================*/
$('.business-news-active').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
	appendArrows: '.business-news-nav',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
			}
		},
	]
});


/*=============================================
	=        Community News Active      =
=============================================*/
$('.community-news-active').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
	appendArrows: '.community-news-nav',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
			}
		},
	]
});


/*=============================================
	 =        Home Seven Active      =
=============================================*/
$('.h-seven-slider-active').slick({
	dots: true,
	infinite: true,
	speed: 50,
	autoplay: false,
	arrows: false,
	fade: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
			}
		},
	]
})
.slickAnimation();

/*=============================================
	 =        Gaming Chair Active      =
=============================================*/
$('.gaming-chair-active').slick({
	dots: false,
	infinite: true,
	speed: 0,
	autoplay: true,
	autoplaySpeed: 1000,
	arrows: false,
	fade: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
			}
		},
	]
})


// brand-active
$('.pz-brand-active').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	arrows: false,
	slidesToShow: 6,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
});


/*=============================================
    =    		Magnific Popup		      =
=============================================*/
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});
$('.popup-video').magnificPopup({
	type: 'iframe'
});


/*=============================================
    =    		Isotope	Active  	      =
=============================================*/
$('.tournament-active,.featured-active, .gs-category-active').imagesLoaded( function() {
	var $grid = $('.tournament-active,.featured-active, .gs-category-active').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		columnWidth: 1,
	  }
	});
	// filter items on button click
	$('.tournament-menu').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
});

//for menu active class
$('.tournament-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


/*=============================================
    =    		 Aos Active  	         =
=============================================*/
function aosAnimation() {
	AOS.init({
		duration: 1000,
		mirror: true
	});
}


/*=============================================
    =    		Odometer Active  	       =
=============================================*/
$('.odometer').appear(function (e) {
	var odo = $(".odometer");
	odo.each(function () {
		var countNumber = $(this).attr("data-count");
		$(this).html(countNumber);
	});
});


/*=============================================
    =    		 Countdown  	         =
=============================================*/
$('[data-countdown]').each(function () {
	var $this = $(this), finalDate = $(this).data('countdown');
	$this.countdown(finalDate, function (event) {
		$this.html(event.strftime('<div class="time-count"><span>%D</span>Dagen</div><div class="time-count"><span>%H</span>Hrs</div><div class="time-count"><span>%M</span>Mins</div><div class="time-count"><span>%S</span>Secs</div>'));
	});
});


/*=============================================
    =    		 Scroll Up  	         =
=============================================*/
$.scrollUp({
	scrollName: 'scrollUp',
	topDistance: '300',
	topSpeed: 300,
	animation: 'fade',
	animationInSpeed: 200,
	animationOutSpeed: 200,
	scrollText: '<i class="fas fa-caret-up"></i>',
	activeOverlay: false,
});


/*=============================================
    =    		 Wow Active  	         =
=============================================*/
function wowAnimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}


})(jQuery);