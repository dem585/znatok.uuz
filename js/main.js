$(function(){
	// слайдер на главной странице
	$('.slider').slick({
		autoplay: 300,
		prevArrow:'<button type="button" class="slick slick-prev"><img src="images/icn/prev.svg"></button>',
		nextArrow:'<button type="button" class="slick slick-next"><img src="images/icn/next.svg"></button>'
		
	});
	// меню влючить выключить
	$('.menu__btn').click(function(){
		$('.menu-mobi').addClass('activ-menu');
	});

	$('.menu-close').click(function(){
		$('.menu-mobi').removeClass('activ-menu');
	});

	// акардеон на главной странице
	$('.info__box-title').on('click', function(){
		$('.info__box').removeClass('active-acardion');
		$(this).parent().addClass('active-acardion');
	});
	// расписание олимпиад на главной странице внизу
	$('.time__block').slick({
		slidesToShow: 3,
  		slidesToScroll: 1,
  		prevArrow:'#l',
		nextArrow:'#r',
		responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1
                }
            }
        ]		
	});
// Слайд олипиад в разделе олимпиады
  $('.olimpiad__items').slick({
		slidesToShow: 4,
  		slidesToScroll: 1,
  		prevArrow:'#l',
		nextArrow:'#r',
		responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1
                }
            }
        ]		
	});


// проверка коректности написания email
function validation(){
	var form = document.getElementById("form");
	var email = document.getElementById("email").value;
	var text = document.getElementById("text-email");
	var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		if (email.match(pattern)) {
			form.classList.add("valid");
			form.classList.remove("invalid");
			text.innerHTML ="";
			text.style.color = "green"
		}
		else{
			form.classList.remove("valid");
			form.classList.add("invalid");
			text.innerHTML ="Некоректно ведён email";
			text.style.color = "red"
		}

		if (email == "") {
			form.classList.remove("valid");
			form.classList.remove("invalid");
			text.innerHTML ="";
			text.style.color = "red"
		}
}

// Видео уроки пререключение между предметами
	$('.video-a').on('click', function(){
		$('.video-link').removeClass('video-a-activ');
		$(this).parent().addClass('video-a-activ');
	});

	$('.urok-x').on('click', function(){
		$('.video__block').removeClass('activ-box');
		$('.urok-x-a').addClass('activ-box');
	});

	$('.urok-m').on('click', function(){
		$('.video__block').removeClass('activ-box');
		$('.urok-m-a').addClass('activ-box');
	});

	$('.urok-f').on('click', function(){
		$('.video__block').removeClass('activ-box');
		$('.urok-f-a').addClass('activ-box');
	});

	$('.urok-b').on('click', function(){
		$('.video__block').removeClass('activ-box');
		$('.urok-b-a').addClass('activ-box');
	});

	$('.urok-a').on('click', function(){
		$('.video__block').removeClass('activ-box');
		$('.urok-a-a').addClass('activ-box');
	});

	$('.urok-i').on('click', function(){
		$('.video__block').removeClass('activ-box');
		$('.urok-i-a').addClass('activ-box');
	});

	$('.urok-g').on('click', function(){
		$('.video__block').removeClass('activ-box');
		$('.urok-g-a').addClass('activ-box');
	});
});