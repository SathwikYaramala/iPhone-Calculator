const displayElement = document.getElementById("display");

function appendToDisplay(input) {
  displayElement.value += input;
}

function clearDisplay() {
  displayElement.value = "";
}

function findPercentage() {
  displayElement.value = displayElement.value / 100;
}

function switchSign() {
  displayElement.value = -displayElement.value;
}

function calculate() {
  try {
    displayElement.value = eval(displayElement.value);
  } catch (error) {
    displayElement.value = "Error";
  }
}
