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
  
});


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