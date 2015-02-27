'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$("#classtable").tablesorter();
	console.log('hello!');

	$(".clickable-row").click(function() {
        window.document.location = $(this).data("href");
    });
    
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

$('#newRatingSubmitButton').click(function(e) {
		console.log('clicked');
		var difficulty = $('#new-rating-form #difficulty').val();
		var enjoyability = $('#new-rating-form #enjoyability').val();
		var usefulness = $('#new-rating-form #usefulness').val();
		var review = $('#new-rating-form #review').val();
		var course = $('#new-rating-form #courseNumber').val();

		var json = {
			'difficulty': difficulty,
			'enjoyability': enjoyability,
			'usefulness':  usefulness,
			'review': review,
			'course': course
		};
		console.log(json);
		$.post('/rating/new', json, function() {
			window.location.href = '/courses/CSE '+course; // reload the page
		});
	});