# Welcome to Games-World project

This project is an example of a quiz created in  HTML, CSS and JavaScript

See this project on live enviroment on GitHub Pages here: <https://lseparatio.github.io/Games-World/>

![Website on different screen sizes](readme-assets/images/screens.jpg)

## Features

<details>
<summary>Click To Expand Features</summary>

### Navigation

- Same navigation menu is used across all pages for consistency.

![NavBar Desktop](readme-assets/images/navbar-desktop.jpg)

- Navigation was designed to be easy to use and to understand.

![NavBar Mobile](readme-assets/images/navbar-mobile.jpg)

- Navigation was designed to work well on all devices.
- Even if a nav-bar was not necessary for this project, I created one to make it easier to expand the project with other pages, games, etc ...

### First Screen

First Screen was designed to present the website for user in a friendly manner and to ask for user name.

- First Screen Desktop

![First Screen Desktop](readme-assets/images/first-screen-desktop.png)

- First Screen Mobile

![First Screen Mobile](readme-assets/images/first-screen-mobile.png)

### Name validation screens

- Empty name validation screen

![Empty name validation screen](readme-assets/images/empty-username-validation.png)

- Special characters validation screen

![First Screen Mobile](readme-assets/images/wrong-caracters-validation.png)

### Choose topic screen

Choose topic screen is designed to allow the user to choose an topic of the quiz. Page is fully responsive.

- Choose topic screen desktop

![Choose topic screen desktop](readme-assets/images/choose-screen-desktop.png)

- Choose topic screen tablet

![Choose topic screen tablet](readme-assets/images/choose-screen-tablet.png)

- Choose topic screen mobile

![Choose topic screen mobile](readme-assets/images/choose-screen-mobile.png)

### Questions screen

This screen is designed to rondom show questions and to alow user to select an answer only by disabling the button after any button is clicked.

- Questions screen desktop

![Questions screen desktop](readme-assets/images/question-screen-desktop.png)

- Questions screen mobile

![Questions screen mobile](readme-assets/images/question-screen-mobile.png)

### Answered question screen

When user is selecting an answer buttons are getting disabled to don't allow user to change the answer. Buttons are changing the colors in red and green to provide feedback if user was right.

- Answered question screen desktop

![Answered question screen desktop](readme-assets/images/answered-screen-desktop.png)

- Answered question screen mobile

![Answered question screen](readme-assets/images/answered-screen-mobile.png)

### Feedback screen

Last screen is designed to provide feedback to user. Will be shown a different message if the correct answers are more that wrong ones, if answers are equal and if the wrong ones are more that correct ones. And total correct and wrong are displayed. Next user have option to select another topic or to go to the front page.

- Feedback screen desktop

![Answered question screen desktop](readme-assets/images/feedback-screen-desktop.png)

- Feedback screen mobile

![Answered question screen](readme-assets/images/feedback-screen-mobile.png)
</details>

## The Creation Timeline

<details>
<summary>Click to open creation timeline</summary>

### User Stories

As a site owner:

- I want users to understand that this is a quiz page.
- I want users to be able to easily navigate my website on any device.
- I want to be able to collect user name.
- I want to serve questions and feedback in a easy to understand way.

As a user:

- I want to be able to view the website on any device.
- I want the menu to be intuitive.
- I want to learn what questions i answered right and what not.
- I want to be able to see  my total score at the end.

### Wireframes, i used Balsamiq

<details>
<summary>Click to expend wireframes</summary>

- Mobile Wireframes:

 1. Index Page

![Index Mobile Example](readme-assets/wireframes/first-screen-mobile.png)

 2. Choose topic screen

![Choose topic screen Mobile](readme-assets/wireframes/choose-topic-screen-mobile.png)

 3. Question screen

![Question Screen Mobile Example](readme-assets/wireframes/question-screen-mobile-tablet.png)

 4. Feedback screen

![Feedback screen Mobile Example](readme-assets/wireframes/feedback-screen-mobile-tablet.png)

- Tablet Wireframes:

Only choose topic screen requires a specific design for tablet. Rest of screens are the same for mobile and tablet

 1. Choose Topic

![Choose Topic Screen Example](readme-assets/wireframes/choose-topic-screen-tablet.png)

- Desktop Wireframes:

 1. Index Page

![Index Desktop Example](readme-assets/wireframes/first-screen-desktop.png)

 2. Choose topic screen

![Choose topic screen desktop](readme-assets/wireframes/choose-topic-screen-desktop.png)

 3. Question screen

![Question screen Desktop Example](readme-assets/wireframes/question-screen-desktop.png)

 4. Feedback screen

![Feedback screen Desktop Example](readme-assets/wireframes/feedback-screen-desktop.png)
</details>

### Tools / Technologies

- Visual Studio Code
- HTML
- CSS
- JavaScript
- GIMP
- Microsoft Paint
- Bootstrap 5.1.3

### Colors

- For primary colors i used Blue Navy (183bff), and white for text.
- Red and green so mark correct answers and wrong answers.
All colors adjusted for optimal contrast ratio using: <https://webaim.org/resources/contrastchecker/>

### Images

- Images was taken from <https://www.freeimages.com/>

</details>

## Testing

Responsive Design Checker (Passing all checks)

<a href="https://responsivedesignchecker.com/checker.php?url=https%3A%2F%2Flseparatio.github.io%2FGames-World%2F&width=1400&height=700" rel="noopener" target="_blank">Click To See</a>

<details>
<summary>LightHouse  Mobile test, click to expand.</summary>

![LightHouse test front page](readme-assets/images/tests/lighthouse-test-mobile.png)
</details>

<details>
<summary>LightHouse  Desktop test, click to expand.</summary>

![LightHouse test front page](readme-assets/images/tests/lighthouse-test-desktop.png)
</details>

## Validator testing

- No errors were returned when passing through the HTML official validator.

### HTML validator test link: <a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Flseparatio.github.io%2FGames-World%2F" rel="noopener" target="_blank">Click To See</a>

<details>
<summary>Click to expand image.</summary>

![W3 html validator check for front page with no errors](readme-assets/images/tests/html-validator.png)
</details>

- No errors were returned when passing through the CSS official validator.

### CSS validator test link: <a href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Flseparatio.github.io%2FGames-World%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=" rel="noopener" target="_blank">Click To See</a>

<details>
<summary>Click to expand image.</summary>

![W3 css validator check for front page with no errors](readme-assets/images/tests/css-validator.png)
</details>

### JavaScript BeautifyTools test

<details>
<summary>Click to expand image.</summary>

![JavaScript BeautifyTools test](readme-assets/images/tests/beutify-tools-test.png)
</details>

### JavaScript JsHint test

<details>
<summary>Click to expand image.</summary>

![JavaScript JsHint test](readme-assets/images/tests/jshint-test.png)
</details>

### Chrome console test

- No error in console. Tested complete life cycle of game manually.

## Deployment

### This website was deployed on GitHub pages. Steps

- In the GitHub repository, navigate to the Settings tab
- In left menu, down find Pages tab
- From the source section drop-down menu, select the Main Branch
- Once all is done your link is displayed.

This particular deployment can be seen on: <https://lseparatio.github.io/Games-World/>

## Credits / Technologies

- Bootstrap - For well documented css framework
- FreeImages - For images
- GIMP - For Image processing
- Favicon.io - For Favicon
- Google Fonts - For Luxurious Roman font.
- Code Institute - For brilliant lessons from where i learn to do this.
- FreePubQuiz - For quizes <http://www.freepubquiz.co.uk/>

## Thank you for reading. For any questions don't hesitate to contact me. Kind Regards, Ionut Zapototchi
