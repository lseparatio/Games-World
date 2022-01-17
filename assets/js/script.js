document.getElementById("inputName").focus();

document.getElementById("inputName").addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		localStorage.setItem("userName", document.getElementById("inputName").value);
		let userName = localStorage.getItem("userName");
		if (userName === "") {
			changeTopTextNoUsername();
			document.getElementById("tellMeYourName").innerHTML =
				`I am not allowed to play with strangers so please tell me your name!`;
		} else {
			changeTopText(userName);
			chooseQuizCategory();
		}
	}
});

document.getElementById("submitButton").addEventListener("click", function() {
	localStorage.setItem("userName", document.getElementById("inputName").value);
	let userName = localStorage.getItem("userName");
	if (userName === "") {
		changeTopTextNoUsername();
		document.getElementById("tellMeYourName").innerHTML =
			`I am not allowed to play with strangers so please tell me your name!`;
	} else {
		changeTopText(userName);
		chooseQuizCategory();
	}
});

function changeTopTextNoUsername() {
	document.getElementById("welcomeMiddle").innerHTML = `<h1>Sorry!!</h1>`;
}

function changeTopText(userName) {
	document.getElementById(
		"welcomeTop"
	).innerHTML = `<h1>Nice to meet you  <span id="userName">${userName}</span>!</h1>`;
}

function changeTopTextOnReturn() {
	let userName = localStorage.getItem("userName");
	document.getElementById(
		"welcomeTop"
	).innerHTML = `<h1>Wellcome back <span id="userName">${userName}</span>!</h1>`;
}

/* *
 *Function to show bootstrap cards with images and
 *  to be able to choose one category.
 */
function chooseQuizCategory() {
	document.getElementById("welcomeMiddle").innerHTML =
		`<h2>Do you think that you are ready to test your knowledge? Choose a category!</h2>`;
	document.getElementById("gameContainer").innerHTML = `
	<div class="row" id="game">
<div class="col d-flex justify-content-center gameGeography gameChoices">
<div class="card" style="width: 18rem;">
<img src="assets/img/globe.jpg" class="card-img-top" alt="World Globe.">
<div class="card-body">
	<h5 class="card-title">Geography Quiz</h5>
	<p class="card-text">30 Quiz Questions</p>
	<div class="d-grid gap-2">
  <button id="gameGeography" class="btn" type="button">Play Quiz</button>
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
  <button id="gameAnimal" class="btn" type="button">Play Quiz</button>
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
  <button id="gameKids" class="btn" type="button">Play Quiz</button>
	</div>
</div>
</div>
</div>
</div>
`;
	startGameGeography();
	startGameAnimal();
	startGameKids();
}

function startGameGeography() {
	document.getElementById("gameGeography").addEventListener("click", function() {
		changeTopTextQuizScreen();
		addPointsToGameScreen();
		shuffledQuestions = questionsGeography.sort(() => Math.random() - 0.5);
		currentQuestionIndex = 0;
		addNextQuestion();
	});
}

function startGameAnimal() {
	document.getElementById("gameAnimal").addEventListener("click", function() {
		changeTopTextQuizScreen();
		addPointsToGameScreen();
		shuffledQuestions = questionsAnimal.sort(() => Math.random() - 0.5);
		currentQuestionIndex = 0;
		addNextQuestion();
	});
}

function startGameKids() {
	document.getElementById("gameKids").addEventListener("click", function() {
		changeTopTextQuizScreen();
		addPointsToGameScreen();
		shuffledQuestions = questionsKids.sort(() => Math.random() - 0.5);
		currentQuestionIndex = 0;
		addNextQuestion();
	});
}

function addNextQuestion() {
	showQuestion(shuffledQuestions[currentQuestionIndex]);
	document.getElementById("next-btn").classList.add('hide');
	let questionNumber = 1;
	questionNumber = ++currentQuestionIndex;
	let questionLenght = shuffledQuestions.length;
	document.getElementById("questionNumber").innerHTML =
	`<h4 id="questionCounter">Question nr: ${questionNumber} from ${questionLenght} questions.</h3>`;
	}


	function changeTopTextQuizScreen() {
		let userName = localStorage.getItem("userName");
		document.getElementById (
			"welcomeTop"
		).innerHTML = `<h1>I wish you luck ${userName}!</h1>`;
	}

function addPointsToGameScreen() {
	document.getElementById("welcomeMiddle").innerHTML =
		`
		<div class="container">
		 <div id="score" class="row">
		  <div class="col-md-6">
		   <h2>Correct Answers: <span id="correctAnswers">0</span></h2>
		  </div>
		  <div class="col-md-6">
		   <h2>Wrong Answers: <span id="wrongAnswers">0</span></h2>
		  </div>
		 </div>
		</div>
		`;
}

function showQuestion(question) {
	document.getElementById("gameContainer").innerHTML =
		`
		<div class="container">
		<div class="row">
		 <div class="col-md-12">
			<h3 id="question">${question.question}</h3>
		 </div>
		</div>
	 </div>
	 <div id="answer-buttons" class="d-grid gap-2 col-12 mx-auto buttonsGrid">
 </div>
 <div class="d-grid gap-2 col-12 mx-auto">
  <button id="next-btn" class="btn" type="button">Next</button>
	<button id="finish-btn" class="btn hide" type="button">Go To Main Screen</button>
	<button id="chooseTopic" class="btn hide" type="button">Choose another Topic</button>
	</div>
	<div class="container">
		<div class="row">
		 <div id="questionNumber" class="col-md-12 fixed-bottom">
		 </div>
		</div>
	 </div>
    `;

	question.answers.forEach(answer => {
		const button = document.createElement('button');
		button.innerText = answer.text;
		button.classList.add("btn", "answers");
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener('click', selectAnswer);
		document.getElementById("answer-buttons").appendChild(button);
	});
   document.getElementById("next-btn").addEventListener('click', () => {
		addNextQuestion();
	});	
}



function selectAnswer(e) {
	const selectedButton = e.target;
	const correct = selectedButton.dataset.correct;
	
	Array.from(document.getElementById("answer-buttons").children).forEach(button => {
		setStatusClass(button, button.dataset.correct);
	});
	if (shuffledQuestions.length > currentQuestionIndex) {
		document.getElementById('next-btn').classList.remove('hide');
	} else {
		let chooseTopic = document.getElementById("chooseTopic");
		chooseTopic.classList.remove("hide");
		chooseTopic.addEventListener('click', function(){
			changeTopTextOnReturn();
			chooseQuizCategory();
		});
    let goToMainScreen = document.getElementById("finish-btn");
		goToMainScreen.classList.remove("hide");
		goToMainScreen.addEventListener("click", function(){
			window.location.reload();
		});
	}
}


function setStatusClass(element, correct) {
	clearStatusClass(element);
	if (correct) {
		element.classList.add('correct');
		element.disabled = true;
	} else {
		element.classList.add('wrong');
		element.disabled = true;
		
	}
}

function clearStatusClass(element) {

	element.classList.remove('correct');
	element.classList.remove('wrong');
}

function incrementScore() {
let oldScore = parseInt(document.getElementById("correctAnswers").innerText);
	document.getElementById("correctAnswers").innerText = ++oldScore;
}

function incrementWrongAnswer() {
let oldScore = parseInt(document.getElementById("wrongAnswers").innerText);
document.getElementById("wrongAnswers").innerText = ++oldScore;
}


document.addEventListener("click", function() {
	let buttons = document.getElementsByClassName("answers");
	for (let button of buttons) {
		button.addEventListener("click", function() {
			if (this.getAttribute("data-correct") === "true") {
				console.log("Correct Answer");
				incrementScore();
			} else {
				console.log("Incorrect Answer");
				incrementWrongAnswer();
			}
		});
	}
});




const questionsGeography = [
	{ question: "Which country is the largest landlocked country in the world?",
	answers: [
		{ text: "Kazakhstan", correct: true }, 
		{ text: "Rusia", correct: false }, 
		{ text: "China", correct: false }, 
		{ text: "Afganistan", correct: false }
	 ]
},
 {
	question: "Mount Kosciuszko is the highest mountain in which country?",
	answers: [
		{ text: "Cambodia", correct: false }, 
		{ text: "Japan", correct: false }, 
		{ text: "Australia", correct: true }, 
		{ text: "Botswana", correct: false }
	 ]
}, 
{
	question: "Tobruk is a port city in which country?",
	answers: [
		{ text: "Madagascar", correct: false }, 
	  {	text: "Ireland", correct: false }, 
		{ text: "Mauritius", correct: false }, 
		{ text: "Libya", correct: true}
	]
},
{ question: "Which country is the squarest country on earth?",
answers: [
	{ text: "Micronesia", correct: false }, 
	{ text: "Egypt", correct: true }, 
	{ text: "Poland", correct: false }, 
	{ text: "Oman", correct: false }
 ]
},
{
question: "Name the only two landlocked countries in South America?",
answers: [
	{ text: "Ecuador and Venezuela", correct: false }, 
	{ text: "Bolivia and Uruguay", correct: false }, 
	{ text: "Peru and Brazil", correct: false }, 
	{ text: "Bolivia and Paraguay", correct: true }
 ]
}, 
{
question: "Name Scotland fourth-largest city?",
answers: [
	{ text: "Edinburgh", correct: false }, 
	{	text: "Dundee", correct: true }, 
	{ text: "Stirling", correct: false }, 
	{ text: "Aberdeen", correct: false}
]
},
{ question: "The world highest uninterrupted waterfall, The Angel Falls, is in which country?",
answers: [
	{ text: "Venezuela", correct: true }, 
	{ text: "Guyana", correct: false }, 
	{ text: "Suriname", correct: false }, 
	{ text: "French Guiana", correct: false }
 ]
},
{
question: "Which British river name is derived from the Anglo-Saxon language for \“boundary river\”?",
answers: [
	{ text: "Cam Beck", correct: false }, 
	{ text: "River Ellen", correct: false }, 
	{ text: "Mersey", correct: true }, 
	{ text: "River Keekle", correct: false }
 ]
}, 
{
question: "How many countries in the world have names that start with the letter 'J'?",
answers: [
	{ text: "7", correct: false }, 
	{	text: "1", correct: false }, 
	{ text: "5", correct: false }, 
	{ text: "3", correct: true}
]
},
{ question: "Antananarivo is the largest city in which country?",
answers: [
{ text: "Mozambique", correct: false }, 
{ text: "Madagascar", correct: true }, 
{ text: "Zimbabwe", correct: false }, 
{ text: "Malawi", correct: false }
]
},
{
question: "Which motorway in the UK is the longest?",
answers: [
{ text: "M5", correct: false }, 
{ text: "M3", correct: false }, 
{ text: "M1", correct: false }, 
{ text: "M6", correct: true }
]
}, 
{
question: "How many national parks are there in Wales?",
answers: [
{ text: "5", correct: false }, 
{	text: "3", correct: true }, 
{ text: "8", correct: false }, 
{ text: "2", correct: false}
]
},
 ];

 const questionsAnimal = [
	{ question: "The 'prairie wolf' is an alternative name for which animal?",
	answers: [
		{ text: "Coyote", correct: true }, 
		{ text: "Wolf", correct: false }, 
		{ text: "Dingo", correct: false }, 
		{ text: "Arctic Wolf", correct: false }
	 ]
},
 {
	question: "What are rhino’s horns made from?",
	answers: [
		{ text: "Cambodia", correct: false }, 
		{ text: "Bone", correct: false }, 
		{ text: "Hair", correct: true }, 
		{ text: "Keratin", correct: false }
	 ]
}, 
{
	question: "The primary diet of blue whales are what tiny shrimp-like animals?",
	answers: [
		{ text: "Algae", correct: false }, 
	  {	text: "Krill", correct: true }, 
		{ text: "Worms", correct: false }, 
		{ text: "Daphnia", correct: false}
	]
},
{ question: "Which group of mammals are commonly thought of as pouched mammals?",
answers: [
	{ text: "Eutheria", correct: false }, 
	{ text: "Marsupials", correct: true }, 
	{ text: "Prototheria", correct: false }
 ]
},
{
question: "How many legs does a scorpion have?",
answers: [
	{ text: "8 legs", correct: true }, 
	{ text: "4 legs", correct: false }, 
	{ text: "12 legs", correct: false }, 
	{ text: "2 legs", correct: false }
 ]
}, 
{
question: "What animals can also be known as Hominoidea?",
answers: [
	{ text: "Monkeys", correct: false }, 
	{ text: "Apes", correct: true}
]
},
 ];


 const questionsKids = [
	{ question: "How many days are there in a fortnight?",
	answers: [
		{ text: "14 days", correct: true }, 
		{ text: "4 days", correct: false }, 
		{ text: "40 days", correct: false }, 
		{ text: "44 days", correct: false }
	 ]
},
 {
	question: "What sweet food substance is made by bees?",
	answers: [
		{ text: "Propolis", correct: false }, 
		{ text: "Wax", correct: false }, 
		{ text: "Honey", correct: true }, 
		{ text: "Pollen", correct: false }
	 ]
}, 
{
	question: "The primary diet of blue whales are what tiny shrimp-like animals?",
	answers: [
		{ text: "Algae", correct: false }, 
	  {	text: "Krill", correct: true }, 
		{ text: "Worms", correct: false }, 
		{ text: "Daphnia", correct: false}
	]
},
{ question: "Which group of mammals are commonly thought of as pouched mammals?",
answers: [
	{ text: "Eutheria", correct: false }, 
	{ text: "Marsupials", correct: true }, 
	{ text: "Prototheria", correct: false }
 ]
},
{
question: "How many legs does a scorpion have?",
answers: [
	{ text: "8 legs", correct: true }, 
	{ text: "4 legs", correct: false }, 
	{ text: "12 legs", correct: false }, 
	{ text: "2 legs", correct: false }
 ]
}, 
{
question: "What animals can also be known as Hominoidea?",
answers: [
	{ text: "Monkeys", correct: false }, 
	{ text: "Apes", correct: true}
]
},
 ];

 