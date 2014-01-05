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
	});

	$(".cover").each(function() {

		var coverHeight = $(this).outerHeight();
		var bookHeight = $(this).children("img").height();
		var pad = (coverHeight - bookHeight)/2;

		$(this).css({
			"padding-top" : pad + "px"
		});

	});

});