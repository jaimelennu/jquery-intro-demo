/* app.js
* main script file for our little application
* */

"use strict";

//select all nav links
var allNavlinks = $('nav a');

//select all images
var allImgs = $('img');

//select all sections
var allSections = $('section');

function onReady(){
	//add attribute of target with value bank to each nav link
	//allNavlinks.attr('target', '_blank');
	//allNavlinks.addClass('awesomesauce');

	$('nav').slideUp(3000);
	$('nav').slideDown();
	allSections.hide();
	
}

$('#exit-button').dblclick(function() {
	$('#confirm-exit-modal').modal();
});

allImgs.dblclick(function() {
	console.log($(this));
	$(this).addClass('awesomesauce');
});

allImgs.mouseout(function() {
	$(this).removeClass('awesomesauce');
});

allNavlinks.click(function() {

	//the cooler jquery this - its totally money
	console.log($(this).attr('href'));

	//the plain version of this 
	console.log(this);

	//acts o the jQuery object containing this element
	//$(this).addClass('awesomesauce');
	allSections.hide();
	$($(this).attr('href')).fadeToggle(2000).addClass('awesomesauce');
	//method chaining

});

$(onReady);

