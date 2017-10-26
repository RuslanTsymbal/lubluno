$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');
});
/* viewport width */
function viewport(){
	var e = window,
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){
 			$(this).attr('placeholder', placeholder);
 		});
 	});

	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'),
		$('.main-nav-list').slideToggle();
		return false;
	});

  /*Slick*/
  if($('.my-slide_js').length) {
    $('.my-slide_js').slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      autoplay: true,
      arrows: false,
     cssEase: 'linear'
    });
  }

  /*Formstyler*/
  if($('.styled_js').length) {
    $('.styled_js').styler();
  }


  /*Calendar jquery-ui */
  if ($('.calendar_js').length) {
    $( function() {
      $( ".calendar_js" ).datepicker();
    });
  }

  $('.box-people_right .field-time__block').click(function() {
    $( "#departure" ).focus();
  });

  $('.box-people_left .field-time__block').click(function() {
    $( "#arrival" ).focus();
  });

  //Add active class language item
  $( '.list-lang__link').click(function() {
    $('.list-lang__link').removeClass('lang-active_js');
    $(this).toggleClass('lang-active_js');
  });


  //Add class checkbox in form
  $( '.checked_js').click(function() {
    $(this).toggleClass('checked');
  });


  //burger-menu
  $( ".burger-menu" ).click(function() {
    $(".header-content").toggleClass('display-flex');
    $(this).toggleClass('burger-menu__click');

    var darkBlock = $("div").is("#overlay");

    if (darkBlock) {
      $("#overlay").remove();
    } else {
      // $("html,body").css("overflow","hidden");

    var docHeight = $(document).height();

    $("body").append("<div id='overlay'></div>");
    $("#overlay")
      .height(docHeight)
    }
  });



	/* components */

	/*

	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margon  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};

	*/

	/* components */



});

var handler = function(){

	var height_footer = $('footer').height();
	var height_header = $('header').height();
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 991) {

	}

}
$(window).bind('load', handler);
$(window).bind('resize', handler);

