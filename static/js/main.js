

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
			    success: callbackF,
			    error: function() { console.log("error");}
			  });
		};
		return tunez;
	}({

	});
});



$(function () {




	if (!("R" in window)) {
		alert('Something has gone wrong!');
		return;
	}


	toastr.options = {
	  "closeButton": true,
	  "debug": false,
	  "positionClass": "toast-bottom-right",
	  "onclick": null,
	  "showDuration": "300",
	  "hideDuration": "1000",
	  "timeOut": "5000",
	  "extendedTimeOut": "1000",
	  "showEasing": "swing",
	  "hideEasing": "linear",
	  "showMethod": "fadeIn",
	  "hideMethod": "fadeOut"
	};


	R.ready(function () {

		var player = new metronomik.player("player", R.player);



		$(".m-playToggle").one("click", function(){
			if(!Tune.tracks) {
				toastr.warning("Sorry no tracks matched");
			}





		});

		R.player.on('change:playingTrack',   function(data) {
          Tune.glob = data;
          toastr.info(Tune.glob.get("name"), Tune.glob.get("artist"));
        });



	});

});






