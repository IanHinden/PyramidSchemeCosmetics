
		var iframe = document.querySelector('iframe');
		var player = new Vimeo.Player(iframe);

		player.on('play', function() {
			console.log('played the video!');
		});

		player.getVideoTitle().then(function(title) {
			console.log('title:', title);
		});
		
		var tid = setInterval(backgroundChange, 1000);

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