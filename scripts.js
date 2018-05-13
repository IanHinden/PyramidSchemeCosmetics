		$( window ).load(function() {
			counter = 1;
		  setCookie("counter", visits, expdate);
		  console.log(counter);
		});
		
		
		
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
		var tid3 = setInterval(changeText, 1000);

		//effect to change background when video reaches certain points
		function backgroundChange(){ 
		player.getCurrentTime().then(function(seconds) {
			if(seconds>3 && seconds <5){
				$( "body" ).animate({
					backgroundColor: "black",
				}, 1000 );
				$("#jumpto").fadeOut(1000);
			} else {
				$( "body" ).animate({
					backgroundColor: "white",
				}, 1000 );
				$("#jumpto").fadeIn(1000);
			}
		})};
		
		function shake(){
		player.getCurrentTime().then(function(seconds){
			if(seconds>12){
				player.getPaused().then(function(paused) {
					if(paused==false){
						//$("#mainbody").effect("shake",{times:100, distance:10});
						$(".iframe-scrolled").css({"right":"auto", "left":"auto", "height":"400px"});
						$("#Ron").attr("src", "images/Sharon.jpg");
					} else {
						$(".iframe-scrolled").css({"right":"10", "left":"25%", "height":"273px"});
					}
				});
			}
		})};
		
		function changeText(){
			player.getCurrentTime().then(function(seconds){
				if(seconds>20){
					player.getPaused().then(function(paused){
						if(paused==false){
							$("#opptext").css("display","none");
							$("#opptext-hidden").css("display","block");
						} else {
							$("#opptext").css("display","block");
							$("#opptext-hidden").css("display","none");
						}
				});
			}
		})};
		
		$("#closebutton" ).click(function() {
			$("#vidcontainer").css("display","none");
			player.pause();
		});
			
			
	$(window).scroll(function(){
		//Move video on scroll
 		if($(this).scrollTop()> 380)
 		{
 			$("iframe").addClass("iframe-scrolled");
			$("#closebutton").css("display","inherit");
 		} 
 		else 
 		{
 			$("iframe").removeClass("iframe-scrolled");
			$("#closebutton").css("display", "none");
		}
	});
	