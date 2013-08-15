$(document).ready(function(){

	// Open all links externally that start with http
	$("a[href^=http]").each(function(){
		if(this.href.indexOf(location.hostname) == -1) {
			$(this).attr({target: "_blank",});
		}
	});

	// Fix attached width
	var width = $('.attach-image').width() - 20;
	$('.attach-image').css('max-height', 'none');
	$('.attach-image img').css('max-width', width + 'px');

});
