// your JavaScript file
const container = document.querySelector("#container");

const redPargraph = document.createElement('p');
redPargraph.textContent = "Hey I'm red";
redPargraph.style.color = "red";

const blueHeading = document.createElement('h3');
blueHeading.textContent = "I'm a blue h3";
blueHeading.style.color = "blue";

const divContainer = document.createElement('div');
divContainer.style.border = "1px solid black";
divContainer.style.backgroundColor = "pink";

const h1InsideDiv = document.createElement('h1');
h1InsideDiv.textContent = "I'm in a div";

const pInsideDiv = document.createElement('p');
pInsideDiv.textContent = "ME TOO!";

container.appendChild(redPargraph);
container.appendChild(blueHeading);
container.appendChild(divContainer);

container.appendChild(h1InsideDiv);
container.appendChild(pInsideDiv);

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content";

container.appendChild(content);




