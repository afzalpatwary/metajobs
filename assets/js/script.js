$(document).ready(function () {

	$('.mobile-toogle').click(function (e) {
		$(".menu-open").slideToggle();
	});
	$(".menu-open").on('click', function () {
		$('.menu-open').css({
			display: 'none'
		})
		$('.menu-close').css({
			display: 'block'
		})
	})
	$(".menu-close").on('click', function () {
		$('.menu-open').css({
			display: 'block'
		})
		$('.menu-close').css({
			display: 'none'
		})
	})

	$(function () {
		if ($('.quote-slider').length) {
			$('.quote-slider').owlCarousel({
				loop: true,
				margin: 14,
				autoPlay: true,
				dots: false,
				nav: false,
				navText: ["<i class='fa-solid fa-angle-left", "<i class='fa-solid fa-angle-right'></i>"],
				items: 1,
			})
		}
	})

	$(function () {
		if ($('.reviewSlider').length) {
			$('.reviewSlider').owlCarousel({
				loop: true,
				margin: 30,
				autoPlay: true,
				dots: true,
				nav: true,
				autoplayTimeout: 2500,
                smartSpeed: 2500,
				navText: ["<i class='fa fa-arrow-left text-blue hover:text-white h-10 w-10 bg-lihghtPrm rounded-full hover:bg-blue p-3'></i>", "<i class='rounded-full hover:bg-blue h-10 w-10 bg-lihghtPrm text-blue fa fa-arrow-right hover:text-white p-3'></i>"],
				items: 1,
				responsive: {
					0: {
						items: 1,

					},
					600: {
						items: 2,
					},
					1200: {
						items: 3,
					}
				}
			})
		}
	})

	var sync1 = $("#sync1");
	var sync2 = $("#sync2");
	var slidesPerPage = 3; //globaly define number of elements per page
	var syncedSecondary = true;

	sync1.owlCarousel({
		items: 1,
		slideSpeed: 2000,
		nav: true,
		autoplay: false,
		dots: false,
		loop: true,
		nav: false,
		// responsiveRefreshRate: 200,

	}).on('changed.owl.carousel', syncPosition);

	sync2
		.on('initialized.owl.carousel', function () {
			sync2.find(".owl-item").eq(0).addClass("current");
		})
		.owlCarousel({
			items: slidesPerPage,
			slideItems: 1,
			dots: false,
			nav: false,
			slideSpeed: 1500,
			autoplayTimeout: 4000,
			smartSpeed: 400,
			margin: 15,
			// autoplay: true,
			center: true,
			loop: true,
			slideBy: 1,
			slideSpeed: 1500,
			slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
			// responsiveRefreshRate: 100
		}).on('changed.owl.carousel', syncPosition2);

	function syncPosition(el) {
		var count = el.item.count - 1;
		var current = Math.round(el.item.index - (el.item.count / 2) - .5);

		if (current < 0) {
			current = count;
		}
		if (current > count) {
			current = 0;
		}

		//end block

		sync2
			.find(".owl-item")
			.removeClass("current")
			.eq(current)
			.addClass("current");
		var onscreen = sync2.find('.owl-item.active').length - 1;
		var start = sync2.find('.owl-item.active').first().index();
		var end = sync2.find('.owl-item.active').last().index();

		if (current > end) {
			sync2.data('owl.carousel').to(current, 100, true);
		}
		if (current < start) {
			sync2.data('owl.carousel').to(current - onscreen, 100, true);
		}
	}

	function syncPosition2(el) {
		if (syncedSecondary) {
			var number = el.item.index;
			sync1.data('owl.carousel').to(number, 100, true);
		}
	}

	sync2.on("click", ".owl-item", function (e) {
		e.preventDefault();
		var number = $(this).index();
		sync1.data('owl.carousel').to(number, 300, true);
	});


	 // for select2
	 $(function () {
        if ($(".select2-init").length) {
            $(".select2-init").select2({
                width: 'resolve' // need to override the changed default
            });
        }
    });


	 // btnFormGroupCollapsedToggle
    // FormGroupCollapsed-item
    $(function () {
        if ($('.btnCollapsedToggle').length && $('.collapsed-item').length) {
            $('.btnCollapsedToggle').on('click', function (e) {
                e.preventDefault();
                if ($(this).closest('.collapsed-group').find('.collapsed-item').slideToggle()) {
                    $(this).find('.bi').toggleClass('bi-chevron-down bi-chevron-up');
                }
            });
        }
    });



});