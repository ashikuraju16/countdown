
let numbers = 0;

function startCount() {
  document.getElementById("start-btn");
  const startNumbers = document.getElementById("count-numbers");

  startNumbers = setInterval(function () {
    startNumbers.innerHTML = numbers;
    numbers++;
  }, 1000);
}
