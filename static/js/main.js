var Tune = {};
var rdioIDs = [];


$(function () {




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


});



function callEchoNext(b, a, l) {
	var before = b;
	var after = a;
	var location = l;
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
		success: getArtistData
	});
}


function getArtistData(data){
	Tune.response = data.response;
	Tune.artists = data.response.artists;
	var regEx = /[^:]+$/;
	for(var artist in Tune.artists) {
		var name = Tune.artists[artist].name;
		var id = Tune.artists[artist].foreign_ids[0].foreign_id.match(regEx);
		rdioIDs.push({name : id });
		console.log(name, id);
	}
}











