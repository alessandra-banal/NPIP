$(window).scroll(function(){
		var windowWidth = $(this).width();
		var windowHeight = $(this).height();
		var windowScrollTop = $(this).scrollTop();
	// effect - No1
	if(windowScrollTop > 40) 
	// effect - No3
	var secondAnimation = function() {
		$('.method:eq(0)').delay(1000).animate({//eq(0) like taking the nth child
			opacity:1
		}, 'slow', function() {
			$(this).find('h4').css('background-color', '#B5C3D5');
		});
		$('.method:eq(1)').delay(2000).animate({
			opacity:1
		}, 'slow', function() {
			$(this).find('h4').css('background-color', '#B5C3D5');
		});
		$('.method:eq(2)').delay(3000).animate({
			opacity:1
		}, 'slow', function() {
			$(this).find('h4').css('background-color', '#B5C3D5');
		});
		$('.method:eq(3)').delay(4000).animate({
			opacity:1
		}, 'slow', function() {
			$(this).find('h4').css('background-color', '#B5C3D5');
		});
		$('.method:eq(4)').delay(5000).animate({
			opacity:1
		}, 'slow', function() {
			$(this).find('h4').css('background-color', '#B5C3D5');
		});
		$('.method:eq(5)').delay(6000).animate({
			opacity:1
		}, 'slow', function() {
			$(this).find('h4').css('background-color', '#B5C3D5');
		});
		$('.method:eq(6)').delay(7000).animate({
			opacity:1
		}, 'slow', function() {
			$(this).find('h4').css('background-color', '#B5C3D5');
		});
		$('.method:eq(7)').delay(8000).animate({
			opacity:1
		}, 'slow', function() {
			$(this).find('h4').css('background-color', '#B5C3D5');
		});
		$('.method:eq(8)').delay(9000).animate({
			opacity:1
		}, 'slow', function() {
			$(this).find('h4').css('background-color', '#B5C3D5');
		});
		$('.method:eq(9)').delay(10000).animate({
			opacity:1
		}, 'slow', function() {
			$(this).find('h4').css('background-color', '#B5C3D5');
		});
	};	
	if (windowWidth <= 549){
		if (windowScrollTop > 1750){
			$('.process').css('background', 'FA7F00');
			secondAnimation();
		}
		}else if(windowWidth >549 && windowWidth <=991){
		if(windowScrollTop > 1150){
			$('.process').css('background', 'FA7F00');
			firstAnimation();
		}
	}else{
		if(windowScrollTop > 850) {
			$('.process').css('background', 'red');
			secondAnimation();
		}
	}

});