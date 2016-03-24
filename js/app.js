var main = function() {

	var $overlay = $('<div id="overlay"></div>');
	var $image = $("<img>");
	var $caption = $("<p></p>");

	//An image to overlay
	$overlay.append($image);

	//A caption to overlay
	$overlay.append($caption);

	//Add overlay
	$("body").append($overlay);

	//Capture the click event on a link to an image
	$(".gallery img").on('click', function(event){
	  event.preventDefault();
	  var imageLocation = $(this).attr("src");
	  //Update overlay with the image linked in the link
	  $image.attr("src", imageLocation);
  
	  //Show the overlay.
	  $overlay.show();
  
	  //Get child's title attribute and set caption
	  var captionText = $(this).attr("alt");
	  $caption.text(captionText);
	});

	//When overlay is clicked
	$overlay.on('click', function(){
	  //Hide the overlay
	  $(this).hide();
	});

};

$(document).ready(main);