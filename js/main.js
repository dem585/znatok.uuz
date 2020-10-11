$(function(){

	$('.slider').slick({
		autoplay: 300,
		prevArrow:'<button type="button" class="slick slick-prev"><img src="images/icn/prev.svg"></button>',
		nextArrow:'<button type="button" class="slick slick-next"><img src="images/icn/next.svg"></button>'
	});

	$('.menu__btn').click(function(){
		$('.menu-mobi').addClass('activ-menu');
	});

	$('.menu-close').click(function(){
		$('.menu-mobi').removeClass('activ-menu');
	});


	$('.info__box-title').on('click', function(){
		$('.info__box').removeClass('active-acardion');
		$(this).parent().addClass('active-acardion');
	});


  
});