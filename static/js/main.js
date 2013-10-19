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