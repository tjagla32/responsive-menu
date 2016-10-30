$(document).ready(function(){

	$('#header-icon').click(function(e){
		e.preventDefault();
		$('nav').toggleClass('sidebar');
	});
	$('.container, .menu a').click(function(){
		$('nav').removeClass('sidebar');
	});

	$('a[href^="#"]').click(function(e){

    var target = $(this).attr('href');
    var strip = target.slice(1);
                                  //var hjh = $(this.hash);
    var anchor = $("section[id='" + strip + "']");

    e.preventDefault(); //zapobiega przeładowaniu

    $('html, body').animate({

      scrollTop: anchor.offset().top - $('header').height()*1.3

    }, 'slow');

  });

});
