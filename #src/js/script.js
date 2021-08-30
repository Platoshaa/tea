
@@include('slick.min.js');
@@include('jquery.nicescroll.min.js');
@@include('jquery-ui.js');
@@include('jquery.ui.touch-punch.min.js');
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
if (isMobile.any()) { }
const elem = document.getElementById('footer');


$(function () {
	if (location.hash) {
		var hsh = location.hash.replace('#', '');
		if ($('.popup-' + hsh).length > 0) {
			popupOpen(hsh);
		} else if ($('div.' + hsh).length > 0) {
			$('body,html').animate({ scrollTop: $('div.' + hsh).offset().top, }, 500, function () { });
		}
	}
	$('.wrapper').addClass('loaded');
	$('.header-top__burger').on('click', function () {
		$(this).toggleClass('active')
		$('.header-main__mobile').toggleClass('active')
		$('body').toggleClass('lock')
	})
	$('.filtr-block').on('click', function () {
		$(this).toggleClass('active')
		$('.side-content__spare').toggleClass('active')
	})
	$('.slider-offer').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		dots: false, arrows: false,
	})
	$('.main-slider').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		dots: true, arrows: false,
	})
	var act = "click";
	if (isMobile.iOS()) {
		var act = "touchstart";
	}
	@@include('forms.js');
	// let iconMenu = document.querySelector(".icon-menu");
	// // let body = document.querySelector("body");
	// // let menuBody = document.querySelector(".menu__body");
	// if (iconMenu) {
	// 	iconMenu.addEventListener("click", function () {
	// 		iconMenu.classList.toggle("active");
	// 		// body.classList.toggle("lock");
	// 		// menuBody.classList.toggle("active");
	// 	});
	// }
	document.addEventListener('scroll', function () {
		const posTop = elem.getBoundingClientRect().top + 50;
		// elem.classList.toggle('visible', posTop < );
		if (posTop < window.innerHeight) {
			$('.scrollup').addClass('wt')
		}
		else {
			$('.scrollup').removeClass('wt')
		}
	})

	//ZOOM
	if ($('.gallery').length > 0) {
		baguetteBox.run('.gallery', {
			// Custom options
		});
	}
	$(window).scroll(function () {
		180 < $(this).scrollTop() ? $(".scrollup").fadeIn() : $(".scrollup").fadeOut()
	}),
		$(".scrollup").click(function () {
			return $("html, body").animate({
				scrollTop: 0
			}, 600),
				!1
		}),
		/*
		CLOUD-ZOOM
		<a rel="position:'right',adjustX:25,adjustY:0,Width: 432" href="img/product/zoom.jpg" class="cloud-zoom product-main-mainimage__item">
			<img class="cloudzoom-gallery" src="img/product/zoom.jpg" alt="" />
		</a>
		*/


		//POPUP
		$('.pl').click(function (event) {
			var pl = $(this).attr('href').replace('#', '');
			var v = $(this).data('vid');
			popupOpen(pl, v);
			return false;
		});


	jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
	jQuery('.quantity').each(function () {
		var spinner = jQuery(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find('.quantity-up'),
			btnDown = spinner.find('.quantity-down'),
			min = input.attr('min'),
			max = input.attr('max');

		btnUp.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

	});
	let counter = 0
	$('.card-item__btn').on('click', function () {

		let cart = $(".header-top__cart")
		let imgtodrag = $(this).parent().find('.cards-item__img')
		if (imgtodrag) {
			let imgclone = imgtodrag.clone().offset({
				top: imgtodrag.offset().top,
				left: imgtodrag.offset().left,
			})
				.css({
					paddingTop: "0px",
					width: "150px",
					height: "150px",
					opacity: '0.8',
					position: "absolute",
					'border-radius': '50%',
					objectFit: "cover",
					"z-index": "201"
				})
				.appendTo($("body"))
				.animate(
					{
						top: cart.offset().top + 10,
						left: cart.offset().left + 10,
						width: 75,
						height: 75,
					},
					1500, "linear",
				);

			setTimeout(function () {
				counter++;
				$('.header-top__cart-text--2').text(counter);
				cart.addClass('active')
			}, 1500);


			imgclone.animate(
				{
					width: 0,
					height: 0
				},
				function () {
					$(this).detach();
				}
			)

		}
	})
	$('.tea-item__btn').on('click', function () {
		let cart = $(".header-top__cart")
		let notify = $('.cart-notification')
		let notifyClone = notify.clone().appendTo("body")
		notifyClone.delay(100).animate(
			{
				top: 50,
			},
			400, "swing",
		).delay(3000).animate(
			{

				opacity: 0,
				width: 0,
				height: 0,
				top: cart.offset().top + 25,
				left: cart.offset().left + 25,
			},
			300
		);
		setTimeout(function () {
			counter++;
			$('.header-top__cart-text--2').text(counter);
			cart.addClass('active')
		}, 1500);
		notifyClone.animate(
			{
				width: 0,
				height: 0
			},
			function () {
				$(this).detach();
			}
		)

	})
	$('.tab-tea__btn').on('click', function () {
		$('.tab-tea__btn').removeClass('active')
		$('.content-tab__item').removeClass('active')
		$(this).addClass('active')
		let dataClass = $(this).attr('data-class')
		$('.' + dataClass).addClass('active')
	})
	$('.tea-item__slider-inner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-mini'
	})
	$('.slider-mini').slick({
		slidesToShow: 3,
		infinity: false,
		slidesToScroll: 1,
		asNavFor: '.tea-item__slider-inner',
		dots: false,
		focusOnSelect: true,
		prevArrow: '<button type="button" class="slick-prev mini-arrows"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#fff" /><path d="M3 9.39999L8 4.39999L13 9.39999L11.6 10.8L8 7.19999L4.4 10.8L3 9.39999Z" fill="green" /><path d="M15 8C15 11.9 11.9 15 8 15C4.1 15 1 11.9 1 8C1 4.1 4.1 1 8 1C11.9 1 15 4.1 15 8ZM16 8C16 3.6 12.4 0 8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8Z"fill="green" /></svg></button>',
		nextArrow: '<button type="button" class="slick-next mini-arrows"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#fff" /><path d="M3 9.39999L8 4.39999L13 9.39999L11.6 10.8L8 7.19999L4.4 10.8L3 9.39999Z" fill="green" /><path d="M15 8C15 11.9 11.9 15 8 15C4.1 15 1 11.9 1 8C1 4.1 4.1 1 8 1C11.9 1 15 4.1 15 8ZM16 8C16 3.6 12.4 0 8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8Z"fill="green" /></svg></button>',


	})
	function popupOpen(pl, v) {
		$('.popup').removeClass('active').hide();
		if (!$('.menu__body').hasClass('active')) {
			$('body').data('scroll', $(window).scrollTop());
		}
		if (!isMobile.any()) {
			$('body').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() }).addClass('lock');
			$('.pdb').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() });
		} else {
			setTimeout(function () {
				$('body').addClass('lock');
			}, 300);
		}
		history.pushState('', '', '#' + pl);
		if (v != '' && v != null) {
			$('.popup-' + pl + ' .popup-video__value').html('<iframe src="https://www.youtube.com/embed/' + v + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		}
		$('.popup-' + pl).fadeIn(300).delay(300).addClass('active');

		if ($('.popup-' + pl).find('.slick-slider').length > 0) {
			$('.popup-' + pl).find('.slick-slider').slick('setPosition');
		}
	}
	function openPopupById(popup_id) {
		$('#' + popup_id).fadeIn(300).delay(300).addClass('active');
	}
	function popupClose() {
		$('.popup').removeClass('active').fadeOut(300);
		if (!$('.menu__body').hasClass('active')) {
			if (!isMobile.any()) {
				setTimeout(function () {
					$('body').css({ paddingRight: 0 });
					$('.pdb').css({ paddingRight: 0 });
				}, 200);
				setTimeout(function () {
					$('body').removeClass('lock');
					//$('body,html').scrollTop(parseInt($('body').data('scroll')));
				}, 200);
			} else {
				$('body').removeClass('lock');
				//$('body,html').scrollTop(parseInt($('body').data('scroll')));
			}
		}
		$('.popup-video__value').html('');

		history.pushState('', '', window.location.href.split('#')[0]);
	}
	$('.popup-close,.popup__close').click(function (event) {
		popupClose();
		return false;
	});
	$('.popup').click(function (e) {
		if (!$(e.target).is(".popup>.popup-table>.cell *") || $(e.target).is(".popup-close") || $(e.target).is(".popup__close")) {
			popupClose();
			return false;
		}
	});
	$(document).on('keydown', function (e) {
		if (e.which == 27) {
			popupClose();
		}
	});

	$('.goto').click(function () {
		var el = $(this).attr('href').replace('#', '');
		var offset = 0;
		$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

		if ($('.menu__body').hasClass('active')) {
			$('.menu__body,.icon-menu').removeClass('active');
			$('body').removeClass('lock');
		}
		return false;
	});

	$(document).mouseup(function (e) { // событие клика по веб-документу
		var div = $(".side-content__spare"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass('active'); // скрываем его
		}
	});


	// function ibg() {
	// 	if (isIE()) {
	// 		let ibg = document.querySelectorAll(".ibg");
	// 		for (var i = 0; i < ibg.length; i++) {
	// 			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
	// 				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
	// 			}
	// 		}
	// 	}
	// }
	// ibg();


	//Клик вне области
	$(document).on('click touchstart', function (e) {
		if (!$(e.target).is(".select *")) {
			$('.select').removeClass('active');
		};
	});

	//UP
	$(window).scroll(function () {
		var w = $(window).width();
		if ($(window).scrollTop() > 50) {
			$('#up').fadeIn(300);
		} else {
			$('#up').fadeOut(300);
		}
	});
	$('#up').click(function (event) {
		$('body,html').animate({ scrollTop: 0 }, 300);
	});


	$(".polzunok-5").slider({
		min: 0,
		max: 5000,
		values: [2000, 3000],
		range: true,
		animate: "fast",
		slide: function (event, ui) {
			$(".polzunok-input-5-left").val(ui.values[0]);
			$(".polzunok-input-5-right").val(ui.values[1]);
		}
	});
	$(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
	$(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
	$(".polzunok-container-5 input").change(function () {
		var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),
			opt_left = $(".polzunok-5").slider("option", "min"),
			where_right = $(".polzunok-5").slider("values", 1),
			input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),
			opt_right = $(".polzunok-5").slider("option", "max"),
			where_left = $(".polzunok-5").slider("values", 0);
		if (input_left > where_right) {
			input_left = where_right;
		}
		if (input_left < opt_left) {
			input_left = opt_left;
		}
		if (input_left == "") {
			input_left = 0;
		}
		if (input_right < where_left) {
			input_right = where_left;
		}
		if (input_right > opt_right) {
			input_right = opt_right;
		}
		if (input_right == "") {
			input_right = 0;
		}
		$(".polzunok-input-5-left").val(input_left);
		$(".polzunok-input-5-right").val(input_right);
		if (input_left != where_left) {
			$(".polzunok-5").slider("values", 0, input_left);
		}
		if (input_right != where_right) {
			$(".polzunok-5").slider("values", 1, input_right);
		}
	});
	// $('body').on('click', '.services-inner__box-list li', function (event) {
	// 	$('.services-inner__box-list li').removeClass('active')
	// 	$('.text-services__box').removeClass('active')
	// 	$(this).addClass('active')

	// 	a = $(this).attr("data")
	// 	$("#" + a).addClass('active')
	// })



	// $('body').on('click', '.tab__navitem', function (event) {
	// 	var eq = $(this).index();
	// 	if ($(this).hasClass('parent')) {
	// 		var eq = $(this).parent().index();
	// 	}
	// 	if (!$(this).hasClass('active')) {
	// 		$(this).closest('.tabs').find('.tab__navitem').removeClass('active');
	// 		$(this).addClass('active');
	// 		$(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
	// 		if ($(this).closest('.tabs').find('.slick-slider').length > 0) {
	// 			$(this).closest('.tabs').find('.slick-slider').slick('setPosition');
	// 		}
	// 	}
	// });
	// $.each($('.spoller.active'), function (index, val) {
	// 	$(this).next().show();
	// });
	// $('body').on('click', '.spoller', function (event) {
	// 	if ($(this).hasClass('mob') && !isMobile.any()) {
	// 		return false;
	// 	}

	// 	if ($(this).parents('.one').length > 0) {
	// 		$(this).parents('.one').find('.spoller').not($(this)).removeClass('active').next().slideUp(300);
	// 		$(this).parents('.one').find('.spoller').not($(this)).parent().removeClass('active');
	// 	}

	// 	if ($(this).hasClass('closeall') && !$(this).hasClass('active')) {
	// 		$.each($(this).closest('.spollers').find('.spoller'), function (index, val) {
	// 			$(this).removeClass('active');
	// 			$(this).next().slideUp(300);
	// 		});
	// 	}
	// 	$(this).toggleClass('active').next().slideToggle(300, function (index, val) {
	// 		if ($(this).parent().find('.slick-slider').length > 0) {
	// 			$(this).parent().find('.slick-slider').slick('setPosition');
	// 		}
	// 	});
	// 	return false;
	// });



	function scrolloptions() {
		var scs = 100;
		var mss = 50;
		var bns = false;
		if (isMobile.any()) {
			scs = 10;
			mss = 1;
			bns = true;
		}
		var opt = {
			cursorcolor: "#fff",
			cursorwidth: "4px",
			background: "",
			autohidemode: true,
			cursoropacitymax: 0.4,
			bouncescroll: bns,
			cursorborderradius: "0px",
			scrollspeed: scs,
			mousescrollstep: mss,
			directionlockdeadzone: 0,
			cursorborder: "0px solid #fff",
		};
		return opt;
	}
	function scroll() {
		$('.scroll-body').niceScroll('.scroll-list', scrolloptions());
	}
	if (navigator.appVersion.indexOf("Mac") != -1) {
	} else {
		if ($('.scroll-body').length > 0) { scroll(); }
	}


	// function scrollwhouse() {
	// 	var scs = 100;
	// 	var mss = 50;
	// 	var bns = false;
	// 	if (isMobile.any()) {
	// 		scs = 10;
	// 		mss = 1;
	// 		bns = true;
	// 	}
	// 	var opt = {
	// 		cursorcolor: "#afafaf",
	// 		cursorwidth: "5px",
	// 		background: "",
	// 		autohidemode: false,
	// 		railalign: 'left',
	// 		cursoropacitymax: 1,
	// 		bouncescroll: bns,
	// 		cursorborderradius: "0px",
	// 		scrollspeed: scs,
	// 		mousescrollstep: mss,
	// 		directionlockdeadzone: 0,
	// 		cursorborder: "0px solid #fff",
	// 	};
	// 	return opt;
	// }
	// $('.whouse-content-body').niceScroll('.whouse-content-scroll', scrollwhouse());
	// $('.whouse-content-body').scroll(function (event) {
	// 	var s = $(this).scrollTop();
	// 	var r = Math.abs($(this).outerHeight() - $('.whouse-content-scroll').outerHeight());
	// 	var p = s / r * 100;
	// 	$('.whouse-content__shadow').css({ opacity: 1 - 1 / 100 * p });
	// });



	if ($('.t,.tip').length > 0) {
		tip();
	}
	function tip() {
		$('.t,.tip').webuiPopover({
			placement: 'top',
			trigger: 'hover',
			backdrop: false,
			//selector:true,
			animation: 'fade',
			dismissible: true,
			padding: false,
			//hideEmpty: true
			onShow: function ($element) { },
			onHide: function ($element) { },
		}).on('show.webui.popover hide.webui.popover', function (e) {
			$(this).toggleClass('active');
		});
	}




	$(window).resize(function (event) {
		adaptive_function();
	});
	function adaptive_header(w, h) {

		let headerMenu = $('.header-main__mobile');
		let sidebox = $('.side-content__spare');
		let headerLang = $('.header-main__contacts');
		let headerLang1 = $('.header__menu');
		let sideItem = $('.side-content');

		if (w < 769) {
			if (!headerLang.hasClass('done')) {
				headerLang.addClass('done').appendTo(headerMenu);
			}
		} else {
			if (headerLang.hasClass('done')) {
				headerLang.removeClass('done').appendTo($('.header-main__inner'));
			}
		}
		if (w < 992) {
			$('.side-content__spare').removeClass('active')
			if (!sideItem.hasClass('done')) {
				sideItem.addClass('done').appendTo(sidebox);
			}
		} else {
			if (sideItem.hasClass('done')) {
				sideItem.removeClass('done').prependTo($('.main-content__inner'));
			}
		}

		if (w < 769) {
			if (!headerLang1.hasClass('done')) {
				headerLang1.addClass('done').prependTo(headerMenu);
			}
		} else {
			if (headerLang1.hasClass('done')) {
				headerLang1.removeClass('done').appendTo($('.header'));
			}
		}
	}
	function adaptive_function() {
		var w = $(window).outerWidth();
		var h = $(window).outerHeight();
		adaptive_header(w, h);
	}
	adaptive_function();

});


$(document).scroll(function () {
	if ($(document).scrollTop() >= 50) {
		$(".header-top").addClass("greybg");

		// $(".header-top__burger").addClass("greybg");
	}
	else {
		$(" .header-top").removeClass("greybg");
		// $(".header-top__burger").removeClass("greybg");
	}
}
);
	// $(document).scroll(function () {
	// 	if ($(document).scrollTop() >= 150) {
	// 		$(".about-name__bg").addClass("active");
	// 	}
	// 	else {
	// 		$(".about-name__bg").removeClass("active");
	// 	}
	// 	if ($(document).scrollTop() >= 1050) {
	// 		$(".services-name__bg").addClass("active");
	// 	}
	// 	else {
	// 		$(".services-name__bg").removeClass("active");
	// 	}
	// }

	// );
	// var lastScrollTop = 0;
	// window.addEventListener("scroll", function () {
	// 	var st = window.pageYOffset || document.documentElement.scrollTop;
	// 	if (st > lastScrollTop && st > 100) {
	// 		$("header").css({
	// 			"top": "-80px",
	// 		})
	// 	}
	// 	else if (st > lastScrollTop && st < 200) {
	// 		$("header").css({
	// 			"top": 0,
	// 		})
	// 	}
	// 	else {
	// 		$("header").css({
	// 			"top": 0,
	// 		})
	// 	}
	// 	lastScrollTop = st <= 0 ? 0 : st;
	// }, false);






