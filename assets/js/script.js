document.getElementById('submitButton').addEventListener('click', function() {
	let userName = document.getElementById('inputName').value;
  changeMiddleText();
	changeTopText(userName);
});

function changeTopText(userName) {
	document.getElementById("welcomeTop").innerHTML =
		`<h1>Nice to meet you ${userName}!</h1>`;
}


function changeMiddleText() {
	document.getElementById("welcomeMiddle").innerHTML =
		`<h2>Do you think that you are ready to test your knowledge? Choose a category!</h2>`;
}
