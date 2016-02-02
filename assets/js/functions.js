$(window).scroll(function (){

  var wScroll = $(this).scrollTop();

	$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll /4 +'%)'
	   });


	var nav = $('nav');
	var header = $('header');
	//var pos = nav.position();

	  $(window).scroll(function() {
	   var windowpos = $(window).scrollTop();
			 if (windowpos>=header.outerHeight()){
				 nav.addClass('fixed');
			 }
			 else {
				 nav.removeClass('fixed');
			 }
		});


if(wScroll > $('.borja-pics').offset().top - ($(window).height() / 1.5)) {
		$('.borja-pics figure').each(function(i){
			setTimeout(function(){
		$('.borja-pics figure').eq(i).addClass('is-showing');
			}, 300 * (i+1));
		});
	}



if(wScroll > $('.graphic-arts').offset().top - $(window).height()){
    var offset = (Math.min(0, wScroll -
		$('.graphic-arts').offset().top +$(window).height() - 350)).toFixed();
    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});
    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }

});
