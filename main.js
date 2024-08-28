function showCalculator() {
  document.querySelector(".icon-button").style.display = "none";
  document.getElementById("calculator").style.display = "block";
}

function hideCalculator() {
  document.querySelector(".icon-button").style.display = "block";
  document.getElementById("calculator").style.display = "none";
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function appendCharacter(character) {
  document.getElementById("display").value += character;
}

function calculateResult() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
  333;
}

function toggleSign() {
  let display = document.getElementById("display");
  display.value =
    display.value.charAt(0) === "-"
      ? display.value.slice(1)
      : "-" + display.value;
}
