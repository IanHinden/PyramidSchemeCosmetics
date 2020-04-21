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
		let scale3 = 1.5;

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
				window.addEventListener("scroll", keepTop, true);
			}
			
			if((seconds>230 && seconds <240)){
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
			}
			
			if((seconds>250 && seconds <260)){
				$("#tammytwo").fadeIn(30000);
				let tammyTwo = document.getElementById("tammytwo");
				let ts = setInterval(tammyCreep2, 5);
				function tammyCreep2(){
					if(scale2 > 3){
						clearInterval(ts);
					} else {
						scale2 = scale2 + .000001;
						tammyTwo.style.transform = "scale(" + scale2 + ")";
					}
				}
			}
			
			if((seconds>280 && seconds <290)){
				$("#tammythree").fadeIn(30000);
				let tammyThree = document.getElementById("tammythree");
				let ts = setInterval(tammyCreep3, 5);
				function tammyCreep3(){
					if(scale3 > 3){
						clearInterval(ts);
					} else {
						scale3 = scale3 + .000001;
						tammyThree.style.transform = "scale(" + scale3 + ")";
					}
				}
			}
			
			if((seconds>310 && seconds <333)){
				$("#tammyfour").fadeIn(30000);
				let tammyFour = document.getElementById("tammyfour");
				let ts = setInterval(tammyCreep4, 5);
				let scale4 = 1.5;
				function tammyCreep4(){
					if(scale4 > 5){
						clearInterval(ts);
					} else {
						scale4 = scale4 + .0005;
						tammyFour.style.transform = "scale(" + scale4 + ")";
					}
				}
			}
			
			//Back to normal
			if((seconds>333 && seconds <337)){
				console.log("Back to normal");
				$("#blackout").css("display", "none");
			}
			
			function keepTop(event) {
				if($(this).scrollTop()> 0)
					{
						window.scrollTo(0,0);
					} 
			}
		})};
		
		// Code to check if video has ended
		var tid = setInterval(checkEnd, 50);
		
		function checkEnd(){
		player.getEnded().then(function(ended) {
			if(ended == true){
				
			}
		})};
		
		/*setTimeout(() => {
			setInterval(() => {
				console.log("Here is the interval thing");
			}, 2000)
		}, 5000);
	
		
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
		
		
			
			
	$(window).scroll(function(){
		//Move video on scroll
 		if($(this).scrollTop()> 380)
 		{
 			$("iframe").addClass("iframe-scrolled");
 		} 
 		else 
 		{
 			$("iframe").removeClass("iframe-scrolled");
		}
	});
	