document.getElementById("inputName").focus();

document.getElementById("inputName").addEventListener("keydown", function(event) {
		if (event.key === "Enter") {
			let userName = document.getElementById("inputName").value;
			if (userName == "") {
				document.getElementById("tellMeYourName").innerHTML = 
				`I am not allowed to play with strangers so please tell me your name!`;
			} else {
				changeTopText(userName);
				changeMiddleText();
				chooseQuizCategory();
			}
		}
	});

document.getElementById("submitButton").addEventListener("click", function() {
	let userName = document.getElementById("inputName").value;
	if (userName == "") {
		document.getElementById("tellMeYourName").innerHTML = 
		`I am not allowed to play with strangers so please tell me your name!`;
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
	document.getElementById("welcomeMiddle").innerHTML = 
	`<h2>Do you think that you are ready to test your knowledge? Choose a category!</h2>`;
}

/* Function to show bootstrap tags with images and
 *  to be able to choose one category.
 */
function chooseQuizCategory() {
	document.getElementById("gameContainer").innerHTML = `
	<div class="row" id="game">
<div class="col d-flex justify-content-center gameGeography gameChoices">
<div class="card" style="width: 18rem;">
<img src="assets/img/globe.jpg" class="card-img-top" alt="World Globe.">
<div class="card-body">
	<h5 class="card-title">Geography Quiz</h5>
	<p class="card-text">30 Quiz Questions</p>
	<div class="d-grid gap-2">
  <button id="gameGeography" class="btn btn-primary" type="button">Play Quiz</button>
	</div>
</div>
</div>
</div>
<div class="col d-flex justify-content-center gameAnimal gameChoices">
<div class="card" style="width: 18rem;">
<img src="assets/img/cat.jpg" class="card-img-top" alt="Cat resting on keyboard.">
<div class="card-body">
	<h5 class="card-title">Animal Quiz</h5>
	<p class="card-text">30 Quiz Questions</p>
	<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Play Quiz</button>
	</div>
</div>
</div>
</div>
<div class="col d-flex justify-content-center gameKids gameChoices">
<div class="card" style="width: 18rem;">
<img src="assets/img/kids.jpg" class="card-img-top" alt="Kids Game">
<div class="card-body">
	<h5 class="card-title">Kids Quiz</h5>
	<p class="card-text">30 Quiz Questions</p>
	<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Play Quiz</button>
	</div>
</div>
</div>
</div>
</div>
`;
}

document.getElementById("gameGeography").addEventListener("click", function() {
	//Here will go question selection for first quesrion.
});

const questionsGeography = [
	{
	question: "Which country is the largest landlocked country in the world?",
	answers: [
		{ text: "Kazakhstan", correct: true}, 
		{ text: "Rusia", correct: false },
	  { text: "China", correct: false }, 
		{ text: "Afganistan", correct: false }, 
	]
}, 
{
	question: "Mount Kosciuszko is the highest mountain in which country?",
	answers: [
		{ text: "Cambodia", correct: false }, 
		{ text: "Japan", correct: false }, 
		{ text: "Australia", correct: true }, 
		{ text: "Botswana", correct: false }, 
	]
}, 
{ 
	question: " Tobruk is a port city in which country?",
	answers: [
		{ text: "Madagascar", correct: false }, 
		{ text: "Ireland", correct: false }, 
		{ text: "Mauritius", correct: false },
		{ text: "Libya", correct: true}, 
	]
}, 
];