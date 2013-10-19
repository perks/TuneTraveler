$(function(){

var Tune = {};
var rdioIDs = [];
alert("HEY");


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
});
