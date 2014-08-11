$(document).ready(function(){



	var winHeight = $(window).height();

	function homeResize () {
		$('.homeSec1').css('height',winHeight-75);
	}
	homeResize();


	//fade in and shrink name
	setTimeout(function(){
		$('.fadeInName').addClass('fadeInNameSmall');
	},200)
	



	$(window).scroll(function () {
		if ($(window).scrollTop() > winHeight-76) {
	        $('.mainNav').css('position', 'fixed');
	        $('.mainNav').css('margin-top',-(winHeight-75));
	        $('.homeSec2').css('margin-top','75px')
	        $('.navArrow').addClass('navArrowClicked');
	    }
	    else{
	    	$('.mainNav').css('position', 'static');
	    	$('.mainNav').css('margin-top','0');
	    	$('.homeSec2').css('margin-top','0px')
	    	$('.navArrow').removeClass('navArrowClicked');
	    }
	});










	//Navigation Bar Functionality
	$("#workTab").click(function (e){
        	e.preventDefault();
            $('html, body').animate({
                scrollTop: $(".homeSec2").offset().top -75
            }, 1700, 'easeInOutCubic');
    });
	$("#aboutTab").click(function (e){
        	e.preventDefault();
            $('html, body').animate({
                scrollTop: $(".homeSec3").offset().top -75
            }, 1500, 'easeInOutCubic');
    });
    $(".name").click(function (e){
        	e.preventDefault();
            $('html, body').animate({
                scrollTop: $(".homeSec1").offset().top
            }, 1700, 'easeInOutCubic');
    });














    $(".navArrow").on({click:function(e){    
	    	if($(this).hasClass('navArrowClicked')){
	    		// $(this).removeClass('navArrowClicked');
	    		e.preventDefault();
	            $('html, body').animate({
	                scrollTop: $(".homeSec1").offset().top
	            }, 1700, 'easeInOutCubic');	
	    	}
	    	else{
	    		// $(this).addClass('navArrowClicked');  
	    		e.preventDefault();
	            $('html, body').animate({
	                scrollTop: $(".homeSec2").offset().top -75
	            }, 1700, 'easeInOutCubic');	
	    	}

		}
	});
























})