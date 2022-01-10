document.getElementById("inputName").focus();

document.getElementById("inputName").addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		let userName = document.getElementById("inputName").value;
		if (userName == "") {
			document.getElementById(
				"tellMeYourName"
			).innerHTML = `I am not allowed to play with strangers so please tell me your name!`;
		} else {
			changeTopText(userName);
			changeMiddleText();
			chooseQuizCategory();
		}
	}
});

document.getElementById("submitButton").addEventListener("click", function () {
	let userName = document.getElementById("inputName").value;
	if (userName == "") {
		document.getElementById(
			"tellMeYourName"
		).innerHTML = `I am not allowed to play with strangers so please tell me your name!`;
	} else {
		changeTopText(userName);
		changeMiddleText();
		chooseQuizCategory();
	}
});

function changeTopText(userName) {
	document.getElementById(
		"welcomeTop"
	).innerHTML = `<h1>Nice to meet you ${userName}!</h1>`;
}

function changeMiddleText() {
	document.getElementById(
		"welcomeMiddle"
	).innerHTML = `<h2>Do you think that you are ready to test your knowledge? Choose a category!</h2>`;
}

function chooseQuizCategory() {
	document.getElementById(
		"gameContainer"
	).innerHTML = `
	<div class="row" id="game">
<div class="col d-flex justify-content-center gameChoices">
<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
	<h5 class="card-title">Card title</h5>
	<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
</div>
<div class="col d-flex justify-content-center gameChoices">
<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
	<h5 class="card-title">Card title</h5>
	<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
</div>
<div class="col d-flex justify-content-center gameChoices">
<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
	<h5 class="card-title">Card title</h5>
	<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
</div>
</div>
`;
}