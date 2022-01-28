/*jshint esversion: 6 */
let shuffledQuestions = "";
let currentQuestionIndex = "";

document.getElementById("inputName").focus();

document.getElementById("inputName").addEventListener("keydown", function(event) {
  "use strict";
let invalidCaracters = /^[A-Za-z]+$/;
		if (event.key === "Enter") {
		localStorage.setItem("userName", document.getElementById("inputName").value);
		let userName = localStorage.getItem("userName");
		if (userName === "") {
			changeTopTextNoUsername();
			document.getElementById("tell-me-your-name").innerHTML =
				`I am not allowed to play with strangers so please tell me your name!`;
		} else if (userName.match(invalidCaracters)){
      changeTopText(userName);
			chooseQuizCategory();
			} else {
      changeTopTextNoUsername();
			document.getElementById("tell-me-your-name").innerHTML =
				`Your name contain numbers or another caracters, are you a robot like me? If not please tell me your name.`;
		}
	}
});

document.getElementById("submit-button").addEventListener("click", function() {
  "use strict";
	localStorage.setItem("userName", document.getElementById("inputName").value);
	let userName = localStorage.getItem("userName");
	let invalidCaracters = /^[A-Za-z]+$/;
	if (userName === "") {
		changeTopTextNoUsername();
		document.getElementById("tell-me-your-name").innerHTML =
			`I am not allowed to play with strangers so please tell me your name!`;
		} else if (userName.match(invalidCaracters)){
      changeTopText(userName);
			chooseQuizCategory();
			} else {
      changeTopTextNoUsername();
			document.getElementById("tell-me-your-name").innerHTML =
				`Your name contain numbers or another caracters, are you a robot like me? If not please tell me your name.`;
		}
});

function changeTopTextNoUsername() {
  "use strict";
	document.getElementById("welcome-middle").innerHTML = `<h1>Sorry!!</h1>`;
}

function changeTopText(userName) {
  "use strict";
	document.getElementById(
		"welcome-top"
	).innerHTML = `<h1>Nice to meet you  <span id="userName">${userName}</span>!</h1>`;
}

function changeTopTextOnReturn() {
        "use strict";
	let userName = localStorage.getItem("userName");
	document.getElementById(
		"welcome-top"
	).innerHTML = `<h1>Wellcome back <span id="userName">${userName}</span>!</h1>`;
}

/**
 *Function to show bootstrap cards with images and
 *  to be able to choose one category.
 */
function chooseQuizCategory() {
        "use strict";
	document.getElementById("welcome-middle").innerHTML =
		`<h2>Do you think that you are ready to test your knowledge? Choose a category!</h2>`;
	document.getElementById("game-container").innerHTML = `
	<div class="row" id="game">
<div class="col d-flex justify-content-center gameGeography game-choices">
<div class="card" style="width: 18rem;">
<img src="assets/img/globe.jpg" class="card-img-top" alt="World Globe.">
<div class="card-body">
	<h5 class="card-title">Geography Quiz</h5>
	<p class="card-text">30 Quiz Questions</p>
	<div class="d-grid gap-2">
  <button id="gameGeography" class="btn answer-btn" type="button">Play Quiz</button>
	</div>
</div>
</div>
</div>
<div class="col d-flex justify-content-center gameAnimal game-choices">
<div class="card" style="width: 18rem;">
<img src="assets/img/cat.jpg" class="card-img-top" alt="Cat resting on keyboard.">
<div class="card-body">
	<h5 class="card-title">Animal Quiz</h5>
	<p class="card-text">30 Quiz Questions</p>
	<div class="d-grid gap-2">
  <button id="gameAnimal" class="btn answer-btn" type="button">Play Quiz</button>
	</div>
</div>
</div>
</div>
<div class="col d-flex justify-content-center gameKids game-choices">
<div class="card" style="width: 18rem;">
<img src="assets/img/kids.jpg" class="card-img-top" alt="Kids Game">
<div class="card-body">
	<h5 class="card-title">Kids Quiz</h5>
	<p class="card-text">30 Quiz Questions</p>
	<div class="d-grid gap-2">
  <button id="gameKids" class="btn answer-btn" type="button">Play Quiz</button>
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
        "use strict";
	document.getElementById("gameGeography").addEventListener("click", function() {
		changeTopTextQuizScreen();
		addPointsToGameScreen();
		shuffledQuestions = questionsGeography.sort(() => Math.random() - 0.5);
		currentQuestionIndex = 0;
		addNextQuestion();
	});
}

function startGameAnimal() {
        "use strict";
	document.getElementById("gameAnimal").addEventListener("click", function() {
		changeTopTextQuizScreen();
		addPointsToGameScreen();
		shuffledQuestions = questionsAnimal.sort(() => Math.random() - 0.5);
		currentQuestionIndex = 0;
		addNextQuestion();
	});
}

function startGameKids() {
        "use strict";
	document.getElementById("gameKids").addEventListener("click", function() {
		changeTopTextQuizScreen();
		addPointsToGameScreen();
		shuffledQuestions = questionsKids.sort(() => Math.random() - 0.5);
		currentQuestionIndex = 0;
		addNextQuestion();
	});
}

function addNextQuestion() {
        "use strict";
	showQuestion(shuffledQuestions[currentQuestionIndex]);
	document.getElementById("next-btn").classList.add("disable");
	document.getElementById("next-btn").innerText = "NEXT - Please select an answer.";
	let questionNumber = 1;
	questionNumber = ++currentQuestionIndex;
	let questionLenght = shuffledQuestions.length;
	document.getElementById("question-number").innerHTML =
	`<h4 id="questionCounter">Question nr: ${questionNumber} from ${questionLenght} questions.</h3>`;
	}

	function changeTopTextQuizScreen() {
    "use strict";
		let userName = localStorage.getItem("userName");
		document.getElementById (
			"welcome-top"
		).innerHTML = `<h1>I wish you luck ${userName}!</h1>`;
	}

function addPointsToGameScreen() {
  "use strict";
	document.getElementById("welcome-middle").innerHTML =
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
  "use strict";
	document.getElementById("game-container").innerHTML =
		`
		<div class="container">
		<div class="row">
		 <div class="col-md-12">
			<h3 id="question">${question.question}</h3>
		 </div>
		</div>
	 </div>
	 <div id="answer-buttons" class="d-grid gap-2 col-12 mx-auto buttons-grid">
 </div>
 <div class="d-grid gap-2 col-12 mx-auto">
  <button id="next-btn" class="btn btn-primary" type="button">Next</button>
	</div>
	<div class="container">
		<div class="row">
		 <div id="question-number" class="col-md-12">
		 </div>
		</div>
	 </div>
    `;

	question.answers.forEach(answer => {
		const button = document.createElement('button');
		button.innerText = answer.text;
		button.classList.add("btn", "answers");
		button.type = "button";
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener('click', selectAnswer);
		document.getElementById("answer-buttons").appendChild(button);
	});
   document.getElementById("next-btn").addEventListener('click', () => {
		addNextQuestion();
	});	
	ceckAnswer();
}

function selectAnswer() {
     "use strict";
	Array.from(document.getElementById("answer-buttons").children).forEach(button => {
		setStatusClass(button, button.dataset.correct);
	});
	if (shuffledQuestions.length > currentQuestionIndex) {
		document.getElementById('next-btn').classList.remove("disable");
		document.getElementById("next-btn").innerText = "NEXT QUESTION";
	} else {
    lastScreen();
		document.getElementById("next-btn").classList.add("hide");
	}
}

function setStatusClass(element, correct) {
     "use strict";
	clearStatusClass(element);
	if (correct) {
		element.classList.add("correct", "disable");	
	} else {
		element.classList.add("wrong", "disable");
	}
}

function clearStatusClass(element) {
     "use strict";
    element.classList.remove('correct');
	element.classList.remove('wrong');
}

function ceckAnswer() {
     "use strict";
	let buttons = document.getElementsByClassName("answers");
	for (let button of buttons) {
		button.addEventListener("click", function() {
			if (this.getAttribute("data-correct") === "true") {				
				let oldScore = parseInt(document.getElementById("correctAnswers").innerText);
	      document.getElementById("correctAnswers").innerText = ++oldScore;
			} else {				
				let oldScore = parseInt(document.getElementById("wrongAnswers").innerText);
        document.getElementById("wrongAnswers").innerText = ++oldScore;
			}
		});
	}
}

function lastScreen(){
  setTimeout(function(){
  let finalCorrectScore = parseInt(document.getElementById("correctAnswers").innerText);
  let finalWrongScore = parseInt(document.getElementById("wrongAnswers").innerText);
  let userName = localStorage.getItem("userName");
  if (finalCorrectScore > finalWrongScore) {
    document.getElementById("welcome-top").innerHTML = 
    `<h1>Congratulations ${userName}!</h1>`;
  } else if(finalCorrectScore == finalWrongScore) {
    document.getElementById("welcome-top").innerHTML = 
    `<h1>You can do better ${userName}!</h1>`;
} else {
    document.getElementById("welcome-top").innerHTML = 
    `<h1>Best luck next time ${userName}!</h1>`;
}
document.getElementById (
  "welcome-middle"
).innerHTML = `<h2>Your results are:</h2>`;
document.getElementById (
  "game-container"
).innerHTML = `
<div class="container">
<div id="score" class="row">
 <div class="col-md-6">
  <h3 class="correct-text">Your correct answers: <span id="correct-answers">${finalCorrectScore}</span></h3>
 </div>
 <div class="col-md-6">
  <h3 class="wrong-text">Wrong Answers: <span id="wrong-answers">${finalWrongScore}</span></h3>
 </div>
</div>
</div>
<div class="container">
<div class="row what-next">
<h4>Please choose what you will like to do next:</h4>
</div>
</div>

<div class="d-grid gap-2 col-12 mx-auto">
<button id="finish-btn" class="btn btn-primary" type="button">Go To Main Screen</button>
<button id="choose-topic" class="btn btn-primary" type="button">Choose another Topic</button>
</div>`;
let chooseTopic = document.getElementById("choose-topic");
chooseTopic.addEventListener('click', function(){
  changeTopTextOnReturn();
  chooseQuizCategory();
});
let goToMainScreen = document.getElementById("finish-btn");
goToMainScreen.addEventListener("click", function(){
  window.location.reload();
});
}, 1000);
}





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
{ question: "Tasmania is separated from mainland Australia by which strait?",
	answers: [
		{ text: "Bass Straight", correct: true }, 
		{ text: "Krab Straight", correct: false }, 
		{ text: "Colonial Straight", correct: false }, 
		{ text: "Deads Straight", correct: false }
	 ]
},
 {
	question: "How many stars were on the US flag in 1940?",
	answers: [
		{ text: "29 Stars", correct: false }, 
		{ text: "50 Stars", correct: false }, 
		{ text: "48 Stars", correct: true }, 
		{ text: "51 Stars", correct: false }
	 ]
}, 
{
	question: "Name the second-largest island in the Mediterranean Sea?",
	answers: [
		{ text: "Sicily", correct: false }, 
	  {	text: "Cyprus", correct: false }, 
		{ text: "Corsica", correct: false }, 
		{ text: "Sardinia", correct: true}
	]
},
{ question: "Aconcagua, the highest mountain in the Americas and the Andes is in which country?",
answers: [
	{ text: "Patagonia", correct: false }, 
	{ text: "Argentina", correct: true }, 
	{ text: "Mesopotamia", correct: false }, 
	{ text: "Gran Chaco", correct: false }
 ]
},
{
question: "Three African countries have a population of over 100 million, can you name them?",
answers: [
	{ text: "Ethiopia, South Africa, Algeria", correct: false }, 
	{ text: "Nigeria, Ethiopia, Egypt", correct: true }, 
	{ text: "Ethiopia, South Africa, Egypt", correct: false }, 
	{ text: "Ethiopia, South Africa, Mozambique", correct: false }
 ]
}, 
{
question: "What name is given to the area of about 40,000 interlocking basalt columns in Northern Ireland?",
answers: [
	{ text: "The Giants Walkway", correct: false }, 
	{	text: "The Giants Causeway", correct: true }, 
	{ text: "The Giants Driveway", correct: false }, 
	{ text: "The Giants Stepway", correct: false}
]
},
{ question: "Which city has more French speakers than Paris?",
answers: [
	{ text: "Kinshasa", correct: true }, 
	{ text: "Brazzaville", correct: false }, 
	{ text: "Buantaba", correct: false }, 
	{ text: "Sona Bata", correct: false }
 ]
},
{
question: "The Aegean Sea is located between which two countries?",
answers: [
	{ text: "Greece and Italy", correct: false }, 
	{ text: "Greece and Albania", correct: false }, 
	{ text: "Greece and Turkey", correct: true }, 
	{ text: "Greece and Cyprus", correct: false }
 ]
}, 
{
question: "Which country is made up of 26 cantons?",
answers: [
	{ text: "Netherlands", correct: false }, 
	{	text: "Austria", correct: false }, 
	{ text: "Sweden", correct: false }, 
	{ text: "Switzerland", correct: true}
]
},
{ question: "The River Tamar forms most of the border between which two counties?",
answers: [
{ text: "Tauton and Cornwall", correct: false }, 
{ text: "Devon and Cornwall", correct: true }, 
{ text: "Exeter and Devon", correct: false }, 
{ text: "Devon and Plymouth", correct: false }
]
},
{
question: "Can you name the northernmost town on the British mainland?",
answers: [
{ text: "Leeds", correct: false }, 
{ text: "Newcastle Upon Tyne", correct: false }, 
{ text: "Carlisle", correct: false }, 
{ text: "Thurso", correct: true }
]
}, 
{
question: "Cape Cod is a geographic cape and peninsula in which American state?",
answers: [
{ text: "Virginia", correct: false }, 
{	text: "Massachusetts", correct: true }, 
{ text: "Georgia", correct: false }, 
{ text: "Arizona", correct: false}
]
},
{ question: "The Danube flows through four capital cities, can you name all four?",
answers: [
	{ text: "Vienna, Bratislava, Budapest and Belgrade", correct: true }, 
	{ text: "Roma, Bratislava, Budapest and Belgrade", correct: false }, 
	{ text: "Roma, Bratislava, Madrid and Belgrade", correct: false }, 
	{ text: "Sofia, Bratislava, Madrid and Belgrade", correct: false }
 ]
},
{
question: "Name the third most populated U.S. state?",
answers: [
	{ text: "Texas", correct: false }, 
	{ text: "California", correct: false }, 
	{ text: "Florida", correct: true }, 
	{ text: "Maryland", correct: false }
 ]
}, 
{
question: "In geography, a cataract is a type of what?",
answers: [
	{ text: "Sea", correct: false }, 
	{	text: "Rover", correct: false }, 
	{ text: "Pond", correct: false }, 
	{ text: "Waterfall", correct: true}
]
},
{ question: "Name the largest and most-populated island of the eight Canary Islands?",
answers: [
{ text: "Gran Canaria", correct: false }, 
{ text: "Tenerife", correct: true }, 
{ text: "Lanzarote", correct: false }, 
{ text: "El Hierro", correct: false }
]
},
{
question: "Cordoba, Rosario, and Ushuaia are cities in which country?",
answers: [
{ text: "Paraguay", correct: false }, 
{ text: "Uruguay", correct: false }, 
{ text: "Chile", correct: false }, 
{ text: "Argentina", correct: true }
]
}, 
{
question: "Which country has the highest population out of Albania, Malta, Slovenia, and Wales?",
answers: [
{ text: "Albania", correct: false }, 
{	text: "Wales", correct: true }, 
{ text: "Malta", correct: false }, 
{ text: "Slovenia", correct: false}
]
}
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
	question: "What are rhino horns made from?",
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
{ question: "The biggest fish in the ocean is the Rhincodon typus, by what name do we know this fish?",
	answers: [
		{ text: "Whale shark", correct: true }, 
		{ text: "Gray Whale", correct: false }, 
		{ text: "Blue Whale", correct: false }, 
		{ text: "Bowhead Whale", correct: false }
	 ]
},
 {
	question: "Which plant makes up more than 99% of a panda diet?",
	answers: [
		{ text: "Small animals", correct: false }, 
		{ text: "Fish", correct: false }, 
		{ text: "Bamboo", correct: true }, 
		{ text: "Other vegetation", correct: false }
	 ]
}, 
{
	question: "Which animals are known as the 'big five' in Africa?",
	answers: [
		{ text: "Lion, Leopard, Rhino, Hyena and African Buffalo", correct: false }, 
	  {	text: "Lion, Leopard, Rhino, Elephant and African Buffalo", correct: true }, 
		{ text: "Lion, Leopard, Rhino, Giraffe and African Buffalo", correct: false }, 
		{ text: "Lion, Leopard, Rhino, Tigers and African Buffalo", correct: false}
	]
},
{ question: "The most powerful bite recorded from a living animal belongs to which animal?",
answers: [
	{ text: "Grizzly Bear", correct: false }, 
	{ text: "Saltwater Crocodile", correct: true }, 
	{ text: "Hyena", correct: false },
  { text: "Gorilla", correct: false }
 ]
},
{
question: "Lemurs are mammals that are native to only one country, which country?",
answers: [
	{ text: "Madagascar", correct: true }, 
	{ text: "Mozambique", correct: false }, 
	{ text: "Zimbabwe", correct: false }, 
	{ text: "Malawi", correct: false }
 ]
}, 
{
question: "What animals are often known as spiny anteaters?",
answers: [
	{ text: "Hedgehogs", correct: false }, 
	{ text: "Echidnas", correct: true},
  { text: "Porcupine", correct: false },
  { text: "Pufferfish", correct: false }
]
},
{ question: "Which animals are the largest arboreal animals in the world?",
	answers: [
		{ text: "Orangutans", correct: true }, 
		{ text: "Gorillas", correct: false }, 
		{ text: "Chimpanzee", correct: false }, 
		{ text: "Bonobo", correct: false }
	 ]
},
 {
	question: "Name the only birds that can fly backwards and upside down?",
	answers: [
		{ text: "Birds-of-paradise", correct: false }, 
		{ text: "Black tern", correct: false }, 
		{ text: "Hummingbirds", correct: true }, 
		{ text: "Wryneck", correct: false }
	 ]
}, 
{
	question: "Which animals native to Australia are known for leaving distinctive cubic feces?",
	answers: [
		{ text: "Opossums", correct: false }, 
	  {	text: "Wombats", correct: true }, 
		{ text: "Koalas", correct: false }, 
		{ text: "Tasmanian devils", correct: false}
	]
},
{ question: "Who operates the national register of pedigree dogs in the United Kingdom?",
answers: [
	{ text: "Breed Pedigrees", correct: false }, 
	{ text: "The Kennel Club", correct: true }, 
	{ text: "Lancashire Heeler Pedigree", correct: false },
  { text: "Hailait's", correct: false }
 ]
},
{
question: "What is the longest it is possible for a snail to sleep for?",
answers: [
	{ text: "3 years", correct: true }, 
	{ text: "3 days", correct: false }, 
	{ text: "3 hours", correct: false }, 
	{ text: "3 weeks", correct: false }
 ]
}, 
{
question: "Which whale possesses a large “tusk” because of its protruding canine tooth?",
answers: [
	{ text: "Sperm whale", correct: false }, 
	{ text: "Narwhal or narwhale", correct: true},
  { text: "Orca", correct: false },
  { text: "Blue whale", correct: false }
]
},
{ question: "Which animal has the scientific name 'Cavia porcellus'?",
	answers: [
		{ text: "Guinea pigs", correct: true }, 
		{ text: "Mangalica", correct: false }, 
		{ text: "Hampshire pig", correct: false }, 
		{ text: "Berkshire pig", correct: false }
	 ]
},
 {
	question: "Manatees are large marine mammals sometimes known as 'sea what'?",
	answers: [
		{ text: "Sea Hippopotamus", correct: false }, 
		{ text: "Sea pigs", correct: false }, 
		{ text: "Sea cows", correct: true }, 
		{ text: "Sea Whales", correct: false }
	 ]
}, 
{
	question: "Which large animal annually kills more people than any other large animal in Africa?",
	answers: [
		{ text: "Lion", correct: false }, 
	  {	text: "Hippopotamus", correct: true }, 
		{ text: "Leopard", correct: false }, 
		{ text: "Tigers", correct: false}
	]
},
{ question: "Which long-haired domesticated bovid is found throughout the Himalayas?",
answers: [
	{ text: "Bison", correct: false }, 
	{ text: "Yak", correct: true }, 
	{ text: "Cattle", correct: false },
  { text: "Water buffalo", correct: false }
 ]
},
{
question: "Daddy longlegs are venomous but can-t bite people",
answers: [
	{ text: "False", correct: true }, 
	{ text: "True", correct: false }
 ]
}, 
{
question: "What name is given to the highest part of the back of a horse, behind the neck and between the shoulders?",
answers: [
	{ text: "Chest", correct: false }, 
	{ text: "Withers", correct: true},
  { text: "Shoulder", correct: false },
  { text: "Barrel", correct: false }
]
},
{ question: "Which common physical characteristic does the chow share with giraffes, polar bears, and Jersey cattle?",
	answers: [
		{ text: "Black tongues", correct: true }, 
		{ text: "Short hair", correct: false }, 
		{ text: "Short tail", correct: false }, 
		{ text: "Horns", correct: false }
	 ]
},
 {
	question: "Which farmyard animal is the most intelligent?",
	answers: [
		{ text: "Sheeps", correct: false }, 
		{ text: "Cows", correct: false }, 
		{ text: "Pigs", correct: true }, 
		{ text: "Goats", correct: false }
	 ]
}, 
{
	question: "What is the collective noun for a group of hedgehogs?",
	answers: [
		{ text: "Pack", correct: false }, 
	  {	text: "Prickle", correct: true }, 
		{ text: "Flock", correct: false }, 
		{ text: "Herd", correct: false}
	]
},
{ question: "Zeus, a family pet from Michigan, USA, is the tallest dog ever verified by Guinness World Records - what breed is he?",
answers: [
	{ text: "Anatolian Shepherd", correct: false }, 
	{ text: "A Great Dane", correct: true }, 
	{ text: "Bullmastiff", correct: false },
  { text: "Tibetan Mastiff", correct: false }
 ]
},
{
question: "What is the national animal of Bangladesh, Malaysia, and South Korea?",
answers: [
	{ text: "Tiger", correct: true }, 
	{ text: "Lion", correct: false },
  { text: "Leopard", correct: false },
  { text: "Pantera", correct: false }
 ]
}, 
{
question: "It gets the name 'box' from its cube-shape and its stings can be fatal to humans what is it?",
answers: [
	{ text: "Corals", correct: false }, 
	{ text: "Jellyfish", correct: true},
  { text: "Catfish", correct: false },
  { text: "Anemones", correct: false }
]
}
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

 