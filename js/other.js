//$(document).snowfall();	

function popup(){
	playerWindow = window.open("http://michaelm-k.github.io/player", "player", "location=no,width=365,height=487");
}	
			
// http://support.cargocollective.com/customer/portal/questions/1349490-animated-gif-for-header-img-force-gif-to-restart-on-refresh
$(function(){
	
	// replace src with timestamped url to avoid cache
	$('#name').hide().attr('src', $('#name').attr('src') + '?_=' + Date.now());
				
	// hide the image until the new one has loaded. Otherwise it'll look choppy when the new one loads.
	$('#name').one('load', function() {
		$(this).show();
	}).each(function() {	
		// also fire the function if the image is loaded before the event is bound.
		if (this.complete) {
			$(this).load();
		}
	});
	
});		