let numbers = 0;
let id;
function startCount() {
  const startNumbers = document.getElementById("count-numbers");

   id = setInterval(function () {
    startNumbers.innerHTML = numbers;
    numbers++;
  }, 1000);
}
function stopCount() {
  clearInterval(id);
}

function resetNumber(){
 
}
