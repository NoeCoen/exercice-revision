var buttonA = document.querySelector(".button-1A");
var buttonA2 = document.querySelector(".button-2A");
var buttonB2 = document.querySelector(".button-2B");

var onClickA = function () {
  buttonA.classList.toggle("colorSwap");
};

var onClickB = function () {
  buttonB2.classList.toggle("colorSwap");
};

buttonA.addEventListener("click", onClickA);
buttonA2.addEventListener("click", onClickB);
