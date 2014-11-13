$(document).ready(function(){

	// Open all links externally that start with http
	$("a[href^=http]").each(function(){
		if(this.href.indexOf(location.hostname) == -1) {
			$(this).attr({target: "_blank",});
		}
	});
	
});
