
		var iframe = document.querySelector('iframe');
		var player = new Vimeo.Player(iframe);

		player.on('play', function() {
			console.log('played the video!');
		});

		player.getVideoTitle().then(function(title) {
			console.log('title:', title);
		});
		
		//code to check video time repeatedly
		var tid = setInterval(backgroundChange, 1000);
		var tid2 = setInterval(shake, 1000);

		//effect to change background when video reaches certain points
		function backgroundChange(){ 
		player.getCurrentTime().then(function(seconds) {
			if(seconds>3 && seconds <5){
				$( "body" ).animate({
					backgroundColor: "black",
				}, 1000 );
			} else {
				$( "body" ).animate({
					backgroundColor: "white",
				}, 1000 );
			}
		})};
		
		function shake(){
		player.getCurrentTime().then(function(seconds){
			if(seconds>12){
				$("#mainbody").effect("shake",{times:100, distance:10});
			}
		})};
		
			
	$(window).scroll(function(){
		//Counter opacity
 		if($(this).scrollTop()> 380)
 		{
 			$("iframe").addClass("iframe-scrolled");
 		} 
 		else 
 		{
 			$("iframe").removeClass("iframe-scrolled");
		}
	});