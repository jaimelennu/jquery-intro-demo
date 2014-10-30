/* app.js
* main script file for our little application
* */

"use strict";

// //select all nav links
// var allNavlinks = $('nav a');

// //select all images
// var allImgs = $('img');

// //select all sections
// var allSections = $('section');

// function onReady(){
// 	//add attribute of target with value bank to each nav link
// 	//allNavlinks.attr('target', '_blank');
// 	//allNavlinks.addClass('awesomesauce');

// 	$('nav').slideUp(3000);
// 	$('nav').slideDown();
// 	allSections.hide();
	
// }

// $('#exit-button').dblclick(function() {
// 	$('#confirm-exit-modal').modal();
// });

// allImgs.dblclick(function() {
// 	console.log($(this));
// 	$(this).addClass('awesomesauce');
// });

// allImgs.mouseout(function() {
// 	$(this).removeClass('awesomesauce');
// });

// allNavlinks.click(function() {

// 	//the cooler jquery this - its totally money
// 	console.log($(this).attr('href'));

// 	//the plain version of this 
// 	console.log(this);

// 	//acts o the jQuery object containing this element
// 	//$(this).addClass('awesomesauce');
// 	allSections.hide();
// 	$($(this).attr('href')).fadeToggle(2000).addClass('awesomesauce');
// 	//method chaining

// });

// $(onReady);

//any type of element can be associated with the .data()
//like string, number, image, ....
var tile = 'img/sec1.jpg';
var info = 'some other data';

var gameBoard = $('#game-board');

//create and configure a new <img> element...
var newTile = $(document.createElement('img'));

newTile.attr('src', 'img/background.jpg');
newTile.attr('alt', 'photo of nature');
newTile.attr('width', '250px');


//use the .data() method to associate extra data with HTML elements
newTile.data('assocTile', tile); //first param is a key
newTile.data('timeInfo', info); //second param is a value

//add to the board
gameBoard.append(newTile);


//when an image in game-board is clicked
$('#game-board img').click(function() {
	//remember that 'this' refers to the DOM element that raised
	//the event; wrapped in jQuery $() to get more functionality

	var clickedImage = $(this);
	var tileData1 = clickedImage.data('assocTile');
	var tileData2 = clickedImage.data('tileInfo');

	clickedImage.attr('src', tileData1);
	clickedImage.attr('alt', tileData2);

	console.log(tileData1);
});

var array = ['a', 'b', 'c' 'd'];

_.forEach(array, function(element, index) {
	console.log(element);
	console.log(index);

});
//can do stuff in console.=


_.different(array, ['c', 'd']);
_.union(array, ['e', 'f']);
_.intersection(array,['b', 'c']);

//new array of numbers
var numArray = [1,2,3,4,5,6,7,8,9,10];
//show me the even values of the array
var evens = _.filter(numArray, function(num) {return 0 == num % 2;});
console.log(evens);

//shuffle() returns a new shuffled array
//leaving the original array intact
var shuffledArray = _.shuffle(array);
console.log(shuffledArray);

console.log(numArray);
console.log(array);
console.log(unionArray);

/*
Time
*/

var startTiime = _.now();
console.log(startTiime);

var timer; //hold our timer value

//use a window.setInterval to create a timer that runs a function every second

 timer = window.setInterval(onTimer, 1000);

function onTimer() {
	//compare the value of _.now() to tart time to get elapsed time
	//math.Floor() rounds down to the nearest integer
	var elapsedSeconds = Math.floor((_.now() - startTime) / 1000);
	console.log(elapsedSeconds);
	$('#game-board h2').css("font-size", elapsedSeconds + 'px');
}

function stopTimer() {
	window.clearInterval(timer);
	//resetting the game board
	$('#game-board').empty();
}

$('.jumbotron').click(stopTimer);




//need a count and boolean 
//elapsed time
//how amny matches have been made (2 clicks = true THEN increase count)
//how many pairs left   (total -made)
//how many attempts failed (2 clicks == false THEN increase false) 
	//can use boolean


//total amount of unfound matches (status display to user)
//time since the start of the game (status disolay to user)
//numbers of wrong matches (status display to user)

//for tiles - has the tile been matched
	//if yes - show, disable new clicks
	//if no - flip back over
//has the tile been clicked
//?? total clicks?
//how many tiles have been clicked (restart to 0 after 2 clicks)
		//set something boolean (set it to true then if 2 clicks then set it false)

//disable if the tile has already been matched


//need ability to restart game
//need to show when the player has won

//turn it back after a second.
//switch it on a timer after clicked

//make grid
//using lodash to shuffle 