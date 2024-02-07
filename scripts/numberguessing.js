
const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainingChances = document.querySelector(".chances");

input.focus();

let randomNumber = Math.floor(Math.random() * 10000);
chance = 10;

checkButton.addEventListener("click", () => {
  chance--;
  let inputValue = input.value;
  if (inputValue == randomNumber) {

    [guess.textContent, input.disabled] = ["Congratulations", true];
    [checkButton.textContent, guess.style.color] = ["Replay", "#333"];
  } else if (inputValue > randomNumber && inputValue < 100) {
    [guess.textContent, remainingChances.textContent] = ["Your guess is too high", chance];
    guess.style.color = "#DE0611";
  } else if (inputValue < randomNumber && inputValue > 0) {
    [guess.textContent, remainingChances.textContent] = ["Your guess is too low", chance];
    guess.style.color = "#DE0611";
  } else {
    [guess.textContent, remainingChances.textContent] = ["Your number is invalid", chance];
    guess.style.color = "#DE0611";
  }

  if (chance == 0) {
    [checkButton.textContent, input.disabled, inputValue] = ["Replay", true, ""];
    [guess.textContent, guess.style.color] = ["You've lost, try again next time", "#DE0611"];
  }
  if (chance < 0) {
    window.location.reload();
  }
});