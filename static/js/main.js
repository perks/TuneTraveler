
jQuery(function($){
	$.TuneTravel = function(tunez) {
		tunez.Query = function(after, before, location, callbackF) {
			$.ajax({
			  		url: "http://developer.echonest.com/api/v4/artist/search",
						dataType: "jsonp",
			  		traditional: true,
			  data: {
			    api_key: "DK23QQCJUWLKC1HPL",
			    format: "jsonp",
			    artist_start_year_after: after,
			    artist_start_year_before: before,
			    artist_location: location,
			    bucket: ["id:rdio-us-streaming", "years_active", "artist_location"],
			  },
			    success: callbackF
			  });
		};
		return tunez;
	}({

	});
});
$(function () {

	var p = 0;
	if (!("R" in window)) {
		alert('Something has gone wrong!');
		return;
	}

	R.ready(function () {

		var player = new metronomik.player("player", R.player);

		$(".m-playToggle").click(function(){

			console.log("awesome");
			R.player.queue.add(Tune.tracks[p]);
			p = p + 1;
		});

	});

});






