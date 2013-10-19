

$(function () {
	var Tune = {};
	var rdioIDs = [];

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

function getArtistData(data){
		Tune.response = data.response;
		Tune.artists = data.response.artists;
		var regEx = /[^:]+$/;
		var name;
		var id;
		for(var artist in Tune.artists) {
			name = Tune.artists[artist].name;
			id = Tune.artists[artist].foreign_ids[0].foreign_id.match(regEx).toString();
			rdioIDs.push({"name":name, "id":id});
		}
		Tune.rdio = rdioIDs;
	}

function callEchoNext(b, a, l) {
		var before = b;
		var after = a;
		var location = l;

	}


});

$('#target').on('click', function() {
	console.log("Madeit");
	$.ajax({
		url: "http://developer.echonest.com/api/v4/artist/search",
		dataType: "jsonp",
		traditional: true,
		data: {
			api_key: "DK23QQCJUWLKC1HPL",
			format: "jsonp",
			artist_start_year_after: '1092',
			artist_start_year_before: '1950',
			artist_location: 'berlin',
			bucket: ["id:rdio-us-streaming", "years_active", "artist_location"],
		},
			success: getArtistData
		});
});
















