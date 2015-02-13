'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
}

$('#courses-navi').click(function(e)
{
	window.location.href = "/courses";
})

$('#about-navi').click(function(e)
{
	window.location.href = "/about";
})

$('#minor-navi').click(function(e)
{
	window.location.href = "/minor";
})