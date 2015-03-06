'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	console.log('hello!');

	$(".clickable-row").click(function() {
        window.document.location = $(this).data("href");
    });
    
})