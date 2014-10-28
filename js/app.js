/* app.js
* main script file for our little application
* */

"use strict";

//select all nav links
var allNavlinks = $('nav a');

//select all images
var allImgs = $('img');

function onReady(){
	//add attribute of target with value bank to each nav link
	//allNavlinks.attr('target', '_blank');
	//allNavlinks.addClass('awesomesauce');
}

allImgs.dblclick(function() {
	console.log($(this));
	$(this).addClass('awesomesauce');
});

allImgs.mouseout(function() {
	$(this).removeClass('awesomesauce');
});

allNavlinks.click(function() {
	//the cooler jquery this - its totally money
	console.log($(this));

	//the plain version of this 
	console.log(this);

	//acts o the jQuery object containing this element
	$(this).addClass('awesomesauce');


});

$(onReady);

