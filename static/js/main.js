var Tune = {};

$(function () {


	function getArtistData(data){
		Tune.response = data.response;
		Tune.artists = data.response.artists;
	}

	if (!("R" in window)) {
		alert('Something has gone wrong!');
		return;
	}

	R.ready(function () {

		var player = new metronomik.player("player", R.player);

		$(".m-playToggle").one("click", function () {
			R.player.queue.add("a171827");
		});

	});


	$.ajax({
		url: "http://developer.echonest.com/api/v4/artist/search",
		dataType: "jsonp",
		traditional: true,
		data: {
			api_key: "DK23QQCJUWLKC1HPL",
			format: "jsonp",
			artist_start_year_after: "1969",
			artist_start_year_before: "1990",
			artist_location: "london",
			bucket: ["id:rdio-us-streaming", "years_active", "artist_location"],
		},
		success: getArtistData
	});

});








