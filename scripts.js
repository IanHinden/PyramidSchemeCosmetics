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
		let scale5 = 1.5;
		
		let letters = ["I", "n", "n", "o", "m", "i", "n", "e", "D", "e", "i", "n", "o", "s", "t", "r", "i", "S", "a", "t", "a", "n", "a", "s", "L", "u", "c", "i", "f", "e", "r", "i", "E", "x", "c", "e", "l", "s", "i", "a"];
		let pyramid = document.getElementById("pyramid");
		
		function loopThroughSplittedText(letters) {
			for (var i = 0; i < letters.length; i++) {
        // for each iteration console.log a word
        // and make a pause after it
				(function (i) {
					setTimeout(function () {
						document.getElementById('pyramid').innerText = letters[i];
						pyramid.style.fontFamily = "Times New Roman, Times, serif";
						pyramid.style.fontWeight = "bold";
						pyramid.style.fontSize = "20px";
						console.log(letters[i]);
					}, 70 * i);
				})(i);
			};
		}

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
			
			if(seconds > 8 && seconds < 9){
				loopThroughSplittedText(letters);
			}
			
			if(seconds >30 && seconds < 35){
				document.getElementById("donpicture").src = "images/DonGlow.gif";
			}
			
			if((seconds>209.5 && seconds < 336)){
				window.scrollTo(0,0);
			}
			
			if((seconds>209.5 && seconds < 220)){
				$("#blackout").css("display", "block");
			}
			
			if((seconds>211 && seconds < 220)){
				$("iframe").css("height","436px");
				$("iframe").removeClass("iframe-scrolled");
				$("iframe").addClass("iframe-shock");
				//window.addEventListener("scroll", keepTop, true);
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
				let scale4 = .5;
				function tammyCreep4(){
					if(scale4 > 5){
						clearInterval(ts);
					} else {
						scale4 = scale4 + .005;
						tammyFour.style.transform = "scale(" + scale4 + ")";
					}
				}
			}
			
			if((seconds>320 && seconds <320)){
				$("#tammyfive").fadeIn(30000);
				let tammyFive = document.getElementById("tammyfive");
				let ts = setInterval(tammyCreep5, 5);
				function tammyCreep5(){
					if(scale5 > 3){
						clearInterval(ts);
					} else {
						scale5 = scale5 + .000001;
						tammyFive.style.transform = "scale(" + scale5 + ")";
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
				document.getElementById("credits").style.display = "block";
				document.getElementById("player").style.display = "none";
			}
		})};
		
		
		//Top credits interaction
		document.getElementById("iancredit").addEventListener("mouseover", function(){
			document.getElementById("iancredit").src = "images/IanCreditLink.gif";
		});
		
		document.getElementById("iancredit").addEventListener("mouseout", function(){
			document.getElementById("iancredit").src = "images/IanCredit.gif";
		});
		
		document.getElementById("kynancredit").addEventListener("mouseover", function(){
			document.getElementById("kynancredit").src = "images/KynanCreditLink.gif";
		});
		
		document.getElementById("kynancredit").addEventListener("mouseout", function(){
			document.getElementById("kynancredit").src = "images/KynanCredit.gif";
		});
		
		document.getElementById("victoriacredit").addEventListener("mouseover", function(){
			document.getElementById("victoriacredit").src = "images/VictoriaCreditLink.gif";
		});
		
		document.getElementById("victoriacredit").addEventListener("mouseout", function(){
			document.getElementById("victoriacredit").src = "images/VictoriaCredit.gif";
		});
		
		document.getElementById("victoriacredit").addEventListener("mouseover", function(){
			document.getElementById("victoriacredit").src = "images/VictoriaCreditLink.gif";
		});
		
		document.getElementById("victoriacredit").addEventListener("mouseout", function(){
			document.getElementById("victoriacredit").src = "images/VictoriaCredit.gif";
		});
		
		
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
	