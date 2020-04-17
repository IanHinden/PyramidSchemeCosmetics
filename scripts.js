		$( window ).load(function() {
		});
		
		//hamburger menu
		$("#nav").addClass("js").before('<div id="menu">&#9776</div>');
		$("#menu").click(function(){
			$("#nav").toggle();
		});
		
		$(window).resize(function(){
			if(window.innerWidth > 768) {
			$("#nav").removeAttr("style");
			}
		});
		
		var iframe = document.querySelector('iframe');
		var player = new Vimeo.Player(iframe);
		
		let scale = 1.5;
		let scale2 = 1.5;

		player.on('play', function() {
			console.log('played the video!');
		});

		player.getVideoTitle().then(function(title) {
			console.log('title:', title);
		});
		
		//code to check video time repeatedly
		var tid = setInterval(backgroundChange, 50);
		//var tid2 = setInterval(shake, 1000);
		//var tid3 = setInterval(changeText, 1000);

		//effect to change background when video reaches certain points
		function backgroundChange(){ 
		player.getCurrentTime().then(function(seconds) {
			
			/*if(seconds>12){
				player.getPaused().then(function(paused) {
					if(paused==false){
						$(".iframe-scrolled").css({"right":"auto", "left":"auto", "height":"400px", "bottom": "auto", "top":"auto"});
						$("#Ron").attr("src", "images/Sharon.jpg");
						$( "body" ).css({ "background-color":"black"});
					} else {
						$(".iframe-scrolled").css({"right":"10", "left":"25%", "height":"273px", "bottom":"10px"});
						$( "body" ).css({ "background-color":"white"});
					}
				});
			}*/
			
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
			
			if((seconds>209.5 && seconds < 220)){
				$("#blackout").css("display", "block");
				window.scrollTo(0,0);
			}
			
			if((seconds>211 && seconds < 220)){
				$("iframe").css("height","436px");
				$("iframe").removeClass("iframe-scrolled");
				$("iframe").addClass("iframe-shock");
			}
			
			if((seconds>230 && seconds <250)){
				$("#tammyone").fadeIn(30000);
				let tammyOne = document.getElementById("tammyone");
				let ts = setInterval(tammyCreep, 5);
				function tammyCreep(){
					if(scale > 3){
						clearInterval(ts);
					} else {
						scale = scale + .000001;
						tammyOne.style.transform = "scale(" + scale + ")";
					}
				}
				
				window.addEventListener("scroll", keepTop, true);
			}
			
			if((seconds>280 && seconds <300)){
				$("#tammytwo").fadeIn(30000);
				let tammyTwo = document.getElementById("tammytwo");
				let ts = setInterval(tammyCreep, 5);
				function tammyCreep(){
					if(scale2 > 3){
						clearInterval(ts);
					} else {
						scale2 = scale2 + .000001;
						tammyTwo.style.transform = "scale(" + scale2 + ")";
					}
				}
			}
			
			//Back to normal
			if((seconds>333 && seconds <337)){
				console.log("Back to normal");
				$("#blackout").css("display", "none");
				$("#tammyone").css("display", "none");
				$("#tammytwo").css("display", "none");
			}
			
			function keepTop() {
				if($(this).scrollTop()> 0)
					{
						window.scrollTo(0,0);
					} 
			}
		})};
		
		/*function shake(){
		player.getCurrentTime().then(function(seconds){
			if(seconds>12){
				player.getPaused().then(function(paused) {
					if(paused==false){
						//$("#mainbody").effect("shake",{times:100, distance:10});
						$(".iframe-scrolled").css({"right":"auto", "left":"auto", "height":"400px", "bottom": "auto", "top":"auto"});
						$("#Ron").attr("src", "images/Sharon.jpg");
						$( "body" ).css({ "background-color":"black"});
					} else {
						$(".iframe-scrolled").css({"right":"10", "left":"25%", "height":"273px"});
						$( "body" ).css({ "background-color":"white"});
					}
				});
			}
		})};*/
		
		/*function changeText(){
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
		})};*/
		
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
	