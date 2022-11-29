// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Add a red paragraph to the DOM
var para = document.createElement("p");
var paraText = document.createTextNode("Hey, I'm red");
para.style.color = 'red';
para.appendChild(paraText);
var element = document.getElementsByTagName("body")[0];
element.appendChild(para);

// Add a blue headline 3 to the DOM
var headline = document.createElement("h3");
var headlineText = document.createTextNode("I'm a blue h3");
headline.style.color = 'blue';
headline.appendChild(headlineText);
var headlineElement = document.getElementsByTagName("body")[0];
headlineElement.appendChild(headline);


// Create a new black border and pink color div to the DOM
let newDiv = document.createElement("div");
newDiv.innerText = "I'm in a div";


// Create a heading 1 inside the new div



// Create a second paragraph inside the new div

