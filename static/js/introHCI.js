'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("Please wait...");
		//$(".jumbotron p").addClass("active");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject);
}

function projectClick(e) {
	// Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // // In an event listener, $(this) is the leement that fired the event
    // var projectTitle = $(this).find("p").text();
    // var jumbotronHeader = $(".jumbotron h1");
    // jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    // if (description.is(":visible")) {
    //    $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    //    description.fadeOut();
    //    console.log("Fading out");
    //    description.hide();
    // } else {
    //    description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    //    description.fadeIn();
    //    console.log("Fading in");
    //    description.show();
    // }

//if (description.length == 0) (containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
description.fadeToggle();
}

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}