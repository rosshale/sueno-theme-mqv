$(document).ready(function(){

	// Open all links externally that start with http
	$("a[href^=http]").each(function(){
		if(this.href.indexOf(location.hostname) == -1) {
			$(this).attr({target: "_blank",});
		}
	});

	// CSS overrides
	$('head').append('<link href="/sueno/sueno.css" rel="stylesheet">');

	// Rotation 
	$('head').append('<link href="/sueno/vendor/font-awesome/css/font-awesome.css" rel="stylesheet">');
	var rotateHTML = '<div class="rotate-container">' + 
					 '  <a class="rotate rotate-left" href="#"><span class="icon-stack"><i class="icon-check-empty icon-stack-base"></i><i class="icon-rotate-left"></i></span></a>' + 
					 '  <a class="rotate rotate-right" href="#"><span class="icon-stack"><i class="icon-check-empty icon-stack-base"></i><i class="icon-rotate-right"></i></span></a>' + 
					 '</div>';
	$('.inline-attachment dd').prepend(rotateHTML);
	$('.attachcontent .gensmall').after(rotateHTML);
	$('a.rotate').click(function(e) {
		e.preventDefault();
		var _this = $(this);
		var img;
		if (_this.parent().closest('.inline-attachment').length) {
			img = _this.parent().closest('.inline-attachment').find('img');
		} else if (_this.parent().closest('.attachcontent').length) {
			img = _this.parent().closest('.attachcontent').children('img');
		}
		var currentRotation = img.attr('rotated') || 0;
		currentRotation = parseInt(currentRotation);
		function setRotation(val) {
			val += 'deg';
			img.css('behavior', 'url(-ms-transform.htc)')
			   .css('-moz-transform', 'rotate(' + val + ')')
			   .css('-webkit-transform', 'rotate(' + val + ')')
			   .css('-o-transform', 'rotate(' + val + ')')
			   .css('-ms-transform', 'rotate(' + val + ')')
			   .attr('rotated', currentRotation);
		}
		if (_this.hasClass('rotate-left')) {
			currentRotation = (currentRotation == -270 ? 0 : currentRotation - 90);
		} else {
			currentRotation = (currentRotation == 270 ? 0 : currentRotation + 90);
		}
		setRotation(currentRotation);
	});

});
