$(function() {
	$('.nav-show-control').hover(
		function() {
			$(this).addClass('nav-show-control-show').attr("style", "overflow: visible;");
		},
		function() {
			$(this).removeClass('nav-show-control-show').attr("style", "overflow: hidden;");
		}
	);
});