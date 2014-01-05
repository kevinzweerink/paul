$(document).ready(function() {
	$("a").on("click", function(e) {
		if($(this).attr("href").charAt(0) === "#") {
			e.preventDefault();
			var link = $(this).attr("href");
			var newPosition = ($(link).position().top) - 50;
			$("body").animate({
				scrollTop: newPosition,
			}, 250);
		}
	})
});