const slider = document.querySelector("#myRange");
const outputNum = document.querySelector("#number");
const button = document.querySelector("#button#button");
const letters = document.querySelector("#letters");
const input = letters.querySelector(".input");
const output = document.querySelector("#output");

slider.addEventListener("input", function () {
  outputNum.textContent = this.value;
});

button.addEventListener("click", () => {
  const char = input.value;
  const numbers = Number(slider.value);

  let answer = makeCipher(char, numbers);
  output.textContent = answer;
});

function makeCipher(char, numbers) {
  const lowercase = char.toLowerCase();
  const alphaBet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let cihper = "";

  for (let i = 0; i < lowercase.length; i++) {
    let currentLetter = lowercase[i];
    if (currentLetter === " ") {
      cihper += currentLetter;
      continue;
    }

    let currentIndex = alphaBet.indexOf(currentLetter);
    let newIndex = currentIndex + numbers;

    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }
    if (newIndex < 0) {
      newIndex = 26 + newIndex;
    }
    if (char[i] === char[i].toUpperCase()) {
      cihper += alphaBet[newIndex].toUpperCase();
    } else {
      cihper += alphaBet[newIndex];
    }
  }
  return cihper;
}
