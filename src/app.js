import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const symbols = {
  diamond: "♦",
  heart: "♥",
  spade: "♠",
  trebol: "♣"
};

const numbers = ["AS", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const symbolsKeys = Object.keys(symbols);

document.addEventListener("DOMContentLoaded", event => {
  showCard();
});

function showCard() {
  const randomSymbolIndex = Math.floor(Math.random() * symbolsKeys.length);
  const chosenSymbolKey = symbolsKeys[randomSymbolIndex];
  const randomNumberIndex = Math.floor(Math.random() * numbers.length);

  const firstSymbolElement = document.querySelector("#firstSymbol");
  const secondSymbolElement = document.querySelector("#secondSymbol");
  const numberElement = document.querySelector("#number");

  firstSymbolElement.textContent = symbols[chosenSymbolKey];
  secondSymbolElement.textContent = symbols[chosenSymbolKey];
  numberElement.textContent = numbers[randomNumberIndex];

  [firstSymbolElement, secondSymbolElement].forEach(element => {
    element.style.fontSize = "100px";
    element.style.color =
      chosenSymbolKey === "diamond" || chosenSymbolKey === "heart"
        ? "red"
        : "black";
  });

  numberElement.style.fontSize = "150px";
}
