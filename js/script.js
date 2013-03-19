jQuery(document).ready(function($){
	
	function slider(){
		var active = $('#slide_nav li.active');
		var index = $("#slide_nav li.active").index(active);
		console.log('this is an awesome = ' + index);
		
		$('#slide_nav li a').each(function() {
			$(this).removeAttr("href");
		});
		
		$("#slide_nav li a").click(function() {
			var index = $("#slide_nav li a").index(this);
			
			console.log('clicked '+ index);
			
			var slide_no = index + 1;
			
			move_slides(slide_no);
		});
	};slider();
	
	function move_slides(slide_number){
		var count = 0;
		
		$('#slides .slide').each(function() {
			count++;
			
			$(this).removeClass("next");
			$(this).removeClass("prev");
			$(this).removeClass("active");
			
			if(count == slide_number){
				$(this).addClass("active");
				//console.log('found active');
			}else if(count < slide_number){
				$(this).addClass("prev");
				//console.log('found prev');
			}else if(count > slide_number){
				$(this).addClass("next");
				//console.log('found next');
			}else{
				//alert("this shouldn't happen");
			}
		});
		
		count = 0;
		$('#slide_nav li a').each(function() {
			count++;
			$(this).removeClass("active");
			
			if(count == slide_number){
				$(this).addClass("active");
			}
		});
		
	};
}); // END jQuery document ready function

