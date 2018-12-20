$(function () {
	
	$('.menu_button').click(function () {
		$(this).toggleClass('active');
		$('.menu_1').fadeToggle();
		$('nav').toggleClass('open');
	})
	$('.menu_1').click(function () {
		$(this).fadeOut();
		$('.menu_button').removeClass('active');
		$('nav').removeClass('open');
	});
})