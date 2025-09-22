// --------------------
// PART 1: Variables & Conditionals
// --------------------
let userName = "Criticos"; // Variable declaration
let age = 18;

if (age >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// --------------------
// PART 2: Custom Functions
// --------------------

// Function 1: Greet user
function greetUser(name) {
  alert("Hello, " + name + "! Welcome to my JavaScript project.");
}
greetUser(userName); // Call the function

// Function 2: Add two numbers
function addNumbers(a, b) {
  return a + b;
}
console.log("Sum of 5 and 10 is: " + addNumbers(5, 10));

// --------------------
// PART 3: Loops
// --------------------

// Loop 1: Create a dynamic fruit list
const items = ["Apples", "Bananas", "Cherries", "Dates"];
const list = document.getElementById("itemList");

for (let i = 0; i < items.length; i++) {
  const li = document.createElement("li");
  li.textContent = items[i];
  list.appendChild(li);
}

// Loop 2: Countdown example
console.log("Countdown:");
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// --------------------
// PART 4: DOM Interactions
// --------------------

// DOM Interaction 1: Button click changes message
const button = document.getElementById("clickMeBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "You clicked the button! 🎉";
  message.style.color = "green";
});

// DOM Interaction 2: Change background color
const header = document.querySelector("header");
header.addEventListener("mouseover", () => {
  header.style.backgroundColor = "#45a049";
});
header.addEventListener("mouseout", () => {
  header.style.backgroundColor = "#4CAF50";
});

// DOM Interaction 3: Dynamically add a paragraph
const newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was added using DOM manipulation!";
document.body.appendChild(newParagraph);
