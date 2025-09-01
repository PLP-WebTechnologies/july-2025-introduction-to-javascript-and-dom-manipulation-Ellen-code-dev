
//  Part 1: Variables & Conditionals

function checkEvenOdd() {
  let num = document.getElementById("userNumber").value;
  let result = "";

  if (num === "") {
    result = "Please enter a number.";
  } else if (num % 2 === 0) {
    result = num + " is EVEN.";
  } else {
    result = num + " is ODD.";
  }

  document.getElementById("result").textContent = result;
}


//  Part 2: Functions

function showGreeting() {
  let message = "Hello, welcome to JavaScript functions!";
  document.getElementById("greeting").textContent = message;
}

function calculateTotal() {
  let price = document.getElementById("price").value;
  let quantity = document.getElementById("quantity").value;

  if (price === "" || quantity === "") {
    document.getElementById("totalPrice").textContent =
      "Please enter both price and quantity.";
    return;
  }

  let total = price * quantity;
  document.getElementById("totalPrice").textContent =
    "Total Price: $" + total.toFixed(2);
}

//  Part 3: Loops

function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = "";

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }

  let li = document.createElement("li");
  li.textContent = "Blast off ";
  list.appendChild(li);
}

function listFruits() {
  let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
  let list = document.getElementById("fruitList");
  list.innerHTML = "";

  fruits.forEach(function (fruit) {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}


// Part 4: DOM Manipulation

function changeText() {
  document.getElementById("domText").textContent =
    "The text has been changed dynamically!";
}

function toggleHighlight() {
  document.getElementById("domText").classList.toggle("highlight");
}

function addNewElement() {
  let div = document.getElementById("newElements");
  let newPara = document.createElement("p");
  newPara.textContent = "I’m a new element added to the DOM!";
  div.appendChild(newPara);
}
