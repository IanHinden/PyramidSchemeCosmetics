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
		
		let endedFunction = false;
		
		var iframe = document.querySelector('iframe');
		var player = new Vimeo.Player(iframe);
		
		let scale = 1.5;
		let scale2 = 1.5;
		let scale3 = 1.5;
		let scale5 = 1.5;
		
		let letters = ["I", "n", "n", "o", "m", "i", "n", "e", "D", "e", "i", "n", "o", "s", "t", "r", "i", "S", "a", "t", "a", "n", "a", "s", "L", "u", "c", "i", "f", "e", "r", "i", "E", "x", "c", "e", "l", "s", "i", "a"];
		let pyramid = document.getElementById("pyramid");
		
		var yvonneFlip = false;
		
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
			
			if(seconds > 8 && seconds < 9){
				loopThroughSplittedText(letters);
			}
			
			if(seconds >30 && seconds < 35){
				document.getElementById("donpicture").src = "images/DonGlow.gif";
			}
			
			if(seconds>144 && seconds < 147){
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
			
			if(seconds>147 && seconds <152){
				$("#opptext").css("display","block");
				$("#opptext-hidden").css("display","none");
			}
			
			if(seconds > 159 && seconds < 187) {
				if (yvonneFlip == false){
					yvonneFlip = true;
					$("#yvonne").attr("src", "images/SnowResize.gif");
				}
			}
			
			if(seconds > 188 && seconds < 189) {
				if (yvonneFlip == true){
					yvonneFlip = false;
					$("#yvonne").attr("src", "images/Yvonne.jpg");
				}
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
			if(ended == true && endedFunction == false){
				endedFunction = true;
				document.getElementById("credits").style.display = "block";
				document.getElementById("player").style.display = "none";
				console.log(endedFunction);
			}
		})};
		
		// Code to check if the film has paused
		let paused = setInterval(checkPause, 20);
		
		function checkPause() {
			player.getPaused().then(function(paused) {
				if(paused == true && yvonneFlip == true) {
					yvonneFlip = false;
					$("#yvonne").attr("src", "images/Yvonne.jpg");
				}
			});
		}
		
		
		//Top credits interaction
		//Ian Credits
		document.getElementById("iancredit").addEventListener("mouseover", function(){
			document.getElementById("iancredit").src = "images/IanCreditLink.gif";
		});
		
		
		document.getElementById("iancredit").addEventListener("mouseout", function(){
			document.getElementById("iancredit").src = "images/IanCredit.gif";
		});
		
		document.getElementById("iancredit").addEventListener("click", function(){
			document.location.href = 'http://www.ianhinden.com';
		});
		
		//Kynan Credits
		/*document.getElementById("kynancredit").addEventListener("mouseover", function(){
			document.getElementById("kynancredit").src = "images/KynanCreditLink.gif";
		});
		
		document.getElementById("kynancredit").addEventListener("mouseout", function(){
			document.getElementById("kynancredit").src = "images/KynanCredit.gif";
		});*/
		
		//Victoria Credits
		/*document.getElementById("victoriacredit").addEventListener("mouseover", function(){
			document.getElementById("victoriacredit").src = "images/VictoriaCreditLink.gif";
		});
		
		document.getElementById("victoriacredit").addEventListener("mouseout", function(){
			document.getElementById("victoriacredit").src = "images/VictoriaCredit.gif";
		});*/
		
		//Senia credit
		document.getElementById("seniacredit").addEventListener("mouseover", function(){
			document.getElementById("seniacredit").src = "images/SeniaCreditLink.gif";
		});
		
		document.getElementById("seniacredit").addEventListener("mouseout", function(){
			document.getElementById("seniacredit").src = "images/SeniaCredit.gif";
		});
		
		document.getElementById("seniacredit").addEventListener("click", function(){
			document.location.href = 'https://www.imdb.com/name/nm9944198/';
		});
		
		//John credit
		document.getElementById("johncredit").addEventListener("mouseover", function(){
			document.getElementById("johncredit").src = "images/JohnCreditLink.gif";
		});
		
		document.getElementById("johncredit").addEventListener("mouseout", function(){
			document.getElementById("johncredit").src = "images/JohnCredit.gif";
		});
		
		document.getElementById("johncredit").addEventListener("click", function(){
			document.location.href = 'https://www.dogandponystudios.net/';
		});
		
		//Joan credit
		document.getElementById("joancredit").addEventListener("mouseover", function(){
			document.getElementById("joancredit").src = "images/JoanCreditLink.gif";
		});
		
		document.getElementById("joancredit").addEventListener("mouseout", function(){
			document.getElementById("joancredit").src = "images/JoanCredit.gif";
		});
		
		document.getElementById("joancredit").addEventListener("click", function(){
			document.location.href = 'https://joanbatayola.myportfolio.com/videos';
		});
		
		//Dee credit
		document.getElementById("deecredit").addEventListener("mouseover", function(){
			document.getElementById("deecredit").src = "images/DeeCreditLink.gif";
		});
		
		document.getElementById("deecredit").addEventListener("mouseout", function(){
			document.getElementById("deecredit").src = "images/DeeCredit.gif";
		});
		
		document.getElementById("deecredit").addEventListener("click", function(){
			document.location.href = 'https://www.imdb.com/name/nm3688939/';
		});
		
		//Brandon credit
		document.getElementById("brandoncredit").addEventListener("mouseover", function(){
			document.getElementById("brandoncredit").src = "images/BrandonCreditLink.gif";
		});
		
		document.getElementById("brandoncredit").addEventListener("mouseout", function(){
			document.getElementById("brandoncredit").src = "images/BrandonCredit.gif";
		});
		
		document.getElementById("brandoncredit").addEventListener("click", function(){
			document.location.href = 'https://www.unlv.edu/people/brandon-mowles';
		});
		
		//Savanah credit
		document.getElementById("savanahcredit").addEventListener("mouseover", function(){
			document.getElementById("savanahcredit").src = "images/SavanahCreditLink.gif";
		});
		
		document.getElementById("savanahcredit").addEventListener("mouseout", function(){
			document.getElementById("savanahcredit").src = "images/SavanahCredit.gif";
		});
		
		document.getElementById("savanahcredit").addEventListener("click", function(){
			document.location.href = 'https://vimeo.com/user45679814';
		});
		
		//Cameron credit
		document.getElementById("cameroncredit").addEventListener("mouseover", function(){
			document.getElementById("cameroncredit").src = "images/CameronCreditLink.gif";
		});
		
		document.getElementById("cameroncredit").addEventListener("mouseout", function(){
			document.getElementById("cameroncredit").src = "images/CameronCredit.gif";
		});
		
		document.getElementById("cameroncredit").addEventListener("click", function(){
			document.location.href = 'https://vimeo.com/user3465825';
		});
		
		//Syliva credit
		/*document.getElementById("sylviacredit").addEventListener("mouseover", function(){
			document.getElementById("sylviacredit").src = "images/SylviaCreditLink.gif";
		});
		
		document.getElementById("sylviacredit").addEventListener("mouseout", function(){
			document.getElementById("sylviacredit").src = "images/SylviaCredit.gif";
		});
		
		document.getElementById("sylviacredit").addEventListener("click", function(){
			document.location.href = 'https://vimeo.com/user3465825';
		});*/
		
		//Genevieve credit
		document.getElementById("genevievecredit").addEventListener("mouseover", function(){
			document.getElementById("genevievecredit").src = "images/GenevieveCreditLink.gif";
		});
		
		document.getElementById("genevievecredit").addEventListener("mouseout", function(){
			document.getElementById("genevievecredit").src = "images/GenevieveCredit.gif";
		});
		
		document.getElementById("genevievecredit").addEventListener("click", function(){
			document.location.href = 'https://vimeo.com/user27592904';
		});
		
		//Cameron2 credit
		document.getElementById("cameron2credit").addEventListener("mouseover", function(){
			document.getElementById("cameron2credit").src = "images/Cameron2CreditLink.gif";
		});
		
		document.getElementById("cameron2credit").addEventListener("mouseout", function(){
			document.getElementById("cameron2credit").src = "images/Cameron2Credit.gif";
		});
		
		document.getElementById("cameron2credit").addEventListener("click", function(){
			document.location.href = 'https://vimeo.com/user3465825';
		});
		
		//Zachary credit
		document.getElementById("zacharycredit").addEventListener("mouseover", function(){
			document.getElementById("zacharycredit").src = "images/ZacharyCreditLink.gif";
		});
		
		document.getElementById("zacharycredit").addEventListener("mouseout", function(){
			document.getElementById("zacharycredit").src = "images/ZacharyCredit.gif";
		});
		
		document.getElementById("zacharycredit").addEventListener("click", function(){
			document.location.href = 'https://www.youtube.com/channel/UC7-BApb3ujN1hz_HxHvILyQ';
		});
		
		//Tanis 2 credit
		document.getElementById("tanis2credit").addEventListener("mouseover", function(){
			document.getElementById("tanis2credit").src = "images/Tanis2CreditLink.gif";
		});
		
		document.getElementById("tanis2credit").addEventListener("mouseout", function(){
			document.getElementById("tanis2credit").src = "images/Tanis2Credit.gif";
		});
		
		document.getElementById("tanis2credit").addEventListener("click", function(){
			document.location.href = 'https://www.twitch.tv/tanis1110';
		});
		
		//Daniel credit
		/*
		document.getElementById("taniscredit").addEventListener("mouseover", function(){
			document.getElementById("taniscredit").src = "images/TanisCreditLink.gif";
		});
		
		document.getElementById("taniscredit").addEventListener("mouseout", function(){
			document.getElementById("taniscredit").src = "images/TanisCredit.gif";
		});
		
		document.getElementById("taniscredit").addEventListener("click", function(){
			document.location.href = 'https://www.twitch.tv/tanis1110';
		});*/
		
		//Ian 2 credit
		document.getElementById("ian2credit").addEventListener("mouseover", function(){
			document.getElementById("ian2credit").src = "images/Ian2CreditLink.gif";
		});
		
		document.getElementById("ian2credit").addEventListener("mouseout", function(){
			document.getElementById("ian2credit").src = "images/Ian2Credit.gif";
		});
		
		document.getElementById("ian2credit").addEventListener("click", function(){
			document.location.href = 'https://www.ianhinden.com';
		});
		
		//Noah credit
		document.getElementById("noahcredit").addEventListener("mouseover", function(){
			document.getElementById("noahcredit").src = "images/NoahCreditLink.gif";
		});
		
		document.getElementById("noahcredit").addEventListener("mouseout", function(){
			document.getElementById("noahcredit").src = "images/NoahCredit.gif";
		});
		
		document.getElementById("noahcredit").addEventListener("click", function(){
			document.location.href = 'https://vimeo.com/user26305738';
		});
		
		//Engie credit
		/*document.getElementById("engiecredit").addEventListener("mouseover", function(){
			document.getElementById("engiecredit").src = "images/EngieCreditLink.gif";
		});
		
		document.getElementById("engiecredit").addEventListener("mouseout", function(){
			document.getElementById("engiecredit").src = "images/EngieCredit.gif";
		});
		
		document.getElementById("engiecredit").addEventListener("click", function(){
			document.location.href = 'https://vimeo.com/user26305738';
		});*/
		
		//Diana credit
		document.getElementById("dianacredit").addEventListener("mouseover", function(){
			document.getElementById("dianacredit").src = "images/DianaCreditLink.gif";
		});
		
		document.getElementById("dianacredit").addEventListener("mouseout", function(){
			document.getElementById("dianacredit").src = "images/DianaCredit.gif";
		});
		
		document.getElementById("dianacredit").addEventListener("click", function(){
			document.location.href = 'https://vimeo.com/user33763482';
		});
		
		//Brittany credit
		document.getElementById("brittanycredit").addEventListener("mouseover", function(){
			document.getElementById("brittanycredit").src = "images/BrittanyCreditLink.gif";
		});
		
		document.getElementById("brittanycredit").addEventListener("mouseout", function(){
			document.getElementById("brittanycredit").src = "images/BrittanyCredit.gif";
		});
		
		document.getElementById("brittanycredit").addEventListener("click", function(){
			document.location.href = 'https://vimeo.com/user33763482';
		});
		
		//Cnthia credit
		/*document.getElementById("cynthiacredit").addEventListener("mouseover", function(){
			document.getElementById("cynthiacredit").src = "images/CynthiaCreditLink.gif";
		});
		
		document.getElementById("cynthiacredit").addEventListener("mouseout", function(){
			document.getElementById("cynthiacredit").src = "images/CynthiaCredit.gif";
		});
		
		document.getElementById("cynthiacredit").addEventListener("click", function(){
			document.location.href = 'https://vimeo.com/user33763482';
		});*/
		
		//Tanis credit
		document.getElementById("taniscredit").addEventListener("mouseover", function(){
			document.getElementById("taniscredit").src = "images/TanisCreditLink.gif";
		});
		
		document.getElementById("taniscredit").addEventListener("mouseout", function(){
			document.getElementById("taniscredit").src = "images/TanisCredit.gif";
		});
		
		document.getElementById("taniscredit").addEventListener("click", function(){
			document.location.href = 'https://www.twitch.tv/tanis1110';
		});
		
		//Jen credit
		/*document.getElementById("jencredit").addEventListener("mouseover", function(){
			document.getElementById("jencredit").src = "images/JenCreditLink.gif";
		});
		
		document.getElementById("jencredit").addEventListener("mouseout", function(){
			document.getElementById("jencredit").src = "images/JenCredit.gif";
		});
		
		document.getElementById("jencredit").addEventListener("click", function(){
			document.location.href = 'https://vimeo.com/user33763482';
		});*/
		
		//Rebekah credit
		/*document.getElementById("rebekahcredit").addEventListener("mouseover", function(){
			document.getElementById("rebekahcredit").src = "images/RebekahCreditLink.gif";
		});
		
		document.getElementById("rebekahcredit").addEventListener("mouseout", function(){
			document.getElementById("rebekahcredit").src = "images/RebekahCredit.gif";
		});
		
		document.getElementById("rebekahcredit").addEventListener("click", function(){
			document.location.href = 'https://vimeo.com/user33763482';
		});*/
		
		//Alexa credit
		/*document.getElementById("alexacredit").addEventListener("mouseover", function(){
			document.getElementById("alexacredit").src = "images/AlexaCreditLink.gif";
		});
		
		document.getElementById("alexacredit").addEventListener("mouseout", function(){
			document.getElementById("alexacredit").src = "images/AlexaCredit.gif";
		});
		
		document.getElementById("alexacredit").addEventListener("click", function(){
			document.location.href = 'https://vimeo.com/user33763482';
		});*/
		
		//Erik credit
		document.getElementById("erikcredit").addEventListener("mouseover", function(){
			document.getElementById("erikcredit").src = "images/ErikCreditLink.gif";
		});
		
		document.getElementById("erikcredit").addEventListener("mouseout", function(){
			document.getElementById("erikcredit").src = "images/ErikCredit.gif";
		});
		
		document.getElementById("erikcredit").addEventListener("click", function(){
			document.location.href = 'https://vimeo.com/user62639765';
		});
		
		//Ixtel credit
		document.getElementById("ixtelcredit").addEventListener("mouseover", function(){
			document.getElementById("ixtelcredit").src = "images/IxtelCreditLink.gif";
		});
		
		document.getElementById("ixtelcredit").addEventListener("mouseout", function(){
			document.getElementById("ixtelcredit").src = "images/IxtelCredit.gif";
		});
		
		document.getElementById("ixtelcredit").addEventListener("click", function(){
			document.location.href = 'https://www.imdb.com/name/nm9777017/';
		});
		
		//Matt credit
		document.getElementById("mattcredit").addEventListener("mouseover", function(){
			document.getElementById("mattcredit").src = "images/MattCreditLink.gif";
		});
		
		document.getElementById("mattcredit").addEventListener("mouseout", function(){
			document.getElementById("mattcredit").src = "images/MattCredit.gif";
		});
		
		document.getElementById("mattcredit").addEventListener("click", function(){
			document.location.href = 'https://www.linkedin.com/in/matthew-porcaro-b5a0843a/';
		});
		
				
		//Larissa credit
		document.getElementById("larissacredit").addEventListener("mouseover", function(){
			document.getElementById("larissacredit").src = "images/LarissaCreditLink.gif";
		});
		
		document.getElementById("larissacredit").addEventListener("mouseout", function(){
			document.getElementById("larissacredit").src = "images/LarissaCredit.gif";
		});
		
		document.getElementById("larissacredit").addEventListener("click", function(){
			document.location.href = 'https://staffmeup.com/profile/id/1319910';
		});
		
		//Sam credit
		document.getElementById("samcredit").addEventListener("mouseover", function(){
			document.getElementById("samcredit").src = "images/SamCreditLink.gif";
		});
		
		document.getElementById("samcredit").addEventListener("mouseout", function(){
			document.getElementById("samcredit").src = "images/SamCredit.gif";
		});
		
		document.getElementById("samcredit").addEventListener("click", function(){
			document.location.href = 'https://www.linkedin.com/in/samzapiain/';
		});
		
		//Dog and Pony credit
		document.getElementById("dogponycredit").addEventListener("mouseover", function(){
			document.getElementById("dogponycredit").src = "images/DogPonyCreditLink.gif";
		});
		
		document.getElementById("dogponycredit").addEventListener("mouseout", function(){
			document.getElementById("dogponycredit").src = "images/DogPonyCredit.gif";
		});
		
		document.getElementById("dogponycredit").addEventListener("click", function(){
			document.location.href = 'https://www.dogandponystudios.net/';
		});
		
		//Jason credit
		document.getElementById("jasoncredit").addEventListener("mouseover", function(){
			document.getElementById("jasoncredit").src = "images/JasonCreditLink.gif";
		});
		
		document.getElementById("jasoncredit").addEventListener("mouseout", function(){
			document.getElementById("jasoncredit").src = "images/JasonCredit.gif";
		});
		
		document.getElementById("jasoncredit").addEventListener("click", function(){
			document.location.href = '\https://www.unlv.edu/people/jason-edmiston';
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
	