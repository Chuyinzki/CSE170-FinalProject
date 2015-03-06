'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	$(".clickable-row").click(function() {
        window.open($(this).data("href"));
    });
    
})