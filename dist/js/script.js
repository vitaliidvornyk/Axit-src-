
// Tabs

$(document).ready(function () {
	$('ul.sentence__tabs').on('click', 'li:not(.sentence__tab_active)', function () {
		$(this)
			.addClass('sentence__tab_active').siblings().removeClass('sentence__tab_active')
			.closest('div.container').find('div.sentence__content').removeClass('sentence__content_active').eq($(this).index()).addClass('sentence__content_active');
	});

	// Hamburger

	window.addEventListener('DOMContentLoaded', () => {
		const menu = document.querySelector('.navbar__menu'),
			menuItem = document.querySelectorAll('.navbar__menu_item'),
			hamburger = document.querySelector('.hamburger');

		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('navbar__menu_active');
		});

		menuItem.forEach(item => {
			item.addEventListener('click', () => {
				hamburger.classList.toggle('hamburger_active');
				menu.classList.toggle('navbar__menu_active');
			})
		})
	})

	// Scroll up

	$(window).on('load', function () {
		$('html, body').animate({ scrollTop: 0 });
	});

	// Page up

	$(window).scroll(function () {
		if ($(this).scrollTop() > 600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	$(function () {
		$("a[href=#up]").click(function () {
			const _href = $(this).attr("href");
			$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
			return false;
		});
	});

	$('#header-form form').validate({
		rules: {
			name: "required",
			email: {
				required: true,
				email: true,
			},
			password: "required",
		},
		messages: {
			name: "Пожалуйста, введите свое имя",
			email: {
				required: "Введите свою почту",
				email: "Неправильно введет адресс почты"
			},
			password: "Введите пароль",
		},
	});

	$('#contact-form').validate({
		rules: {
			name: "required",
			email: {
				required: true,
				email: true,
			},
		},
		messages: {
			name: "Пожалуйста, введите свое имя",
			email: {
				required: "Введите свою почту",
				email: "Неправильно введет адресс почты"
			},
		},
	});


});