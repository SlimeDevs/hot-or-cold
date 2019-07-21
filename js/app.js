var min = 1;
var max = 100;
var numberToGuess;
var currentGuess = 0;

function newGame() {
	resetGame();
	$('#js-guess-submit').parent().submit(function(event) {
		let guess = $('#js-user-guess').val();
		$('#guessList').prepend(`<li>${guess}</li>`)
		currentGuess++;
		$('.js-guess-count').text(`${currentGuess}`)
		$('.js-feedback').text(`${determineAccuracy(guess)}`)
		event.preventDefault();	
	})
}

function handleInstructionsModal() {
	// when users click on the element with
	// `.js-what` class, we'll fade in
	// the instructions modal
	$('.js-what').click(function() {
		$('.overlay').fadeIn(1000);
	});

	// when users click on the element with the
	// `.js-close` class, we'll fade out
	// the instructions modal
	$('.js-close').click(function(){
  		$(".overlay").fadeOut(1000);
	});

	$('.js-new-game').click(function() {
		newGame();
	});
}

// Returns a string containing feedback on how close the person is to the number
function determineAccuracy(number) {
	if (number >= numberToGuess + 50 || number <= numberToGuess - 50) {
		return 'Ice cold';
	} else if (number >= numberToGuess + 30 || number <= numberToGuess - 30) {
		return 'Cold';
	} else if (number >= numberToGuess + 20 || number <= numberToGuess - 20) {
		return 'Warm';
	} else if (number >= numberToGuess + 10 || number <= numberToGuess - 10) {
		return 'Hot';
	} else if (number >= numberToGuess + 1 || number <= numberToGuess - 1) {
		return 'Very Hot';
	} else {
		return 'You got it!';
	}
}

function resetGame() {
	$('.js-guess-list').empty();
	$('.js-guess-count').text('0');
	$('.js-feedback').text('Make your Guess!');
	$('#js-user-guess').val('');
	numberToGuess = Math.floor(Math.random() * (max - min + 1)) + min;
	currentGuess = 0;
}

$(document).ready(function(){
	handleInstructionsModal();
	newGame();
});


