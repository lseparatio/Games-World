document.getElementById('submitButton').addEventListener('click', function() {
	let userName = document.getElementById('inputName').value;
	if (userName == ""){
		document.getElementById('tellMeYourName').innerHTML = 
		`I am not allowed to play with strangers so please tell me your name!`
	} else {
	changeTopText(userName);
  changeMiddleText();
	chooseQuizCategory()
	}
});

function changeTopText(userName) {
	document.getElementById("welcomeTop").innerHTML =
		`<h1>Nice to meet you ${userName}!</h1>`;
}

function changeMiddleText() {
	document.getElementById("welcomeMiddle").innerHTML =
		`<h2>Do you think that you are ready to test your knowledge? Choose a category!</h2>`;
}

function chooseQuizCategory() {
document.getElementById('gameContainer').innerHTML = "Choose categoryes html go here"
}
