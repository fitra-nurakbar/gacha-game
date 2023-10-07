const input = document.querySelector("input[type=checkbox]");
const button = document.querySelector("button");
const cards = document.querySelector("#cards");
const cardContainer = document.querySelector(".card-container");
const card = document.querySelectorAll(".card");
const floatingButton = document.querySelector(".floating-button");
const MAX_AMOUNT = 10;

function generateRandomNumberWithRate(rate) {
  const randomNumber = Math.random() * 100;
  return randomNumber < rate;
}

function removeCardElementsWithDelay(parentElement, delay) {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}

function createCardElement() {
  const getGacha = generateRandomNumberWithRate(10);
  cardContainer.style.visibility = "visible";
  const newCard = document.createElement("div");
  const colorClass = getGacha ? "gold" : "basic";

  newCard.classList.add("card");
  newCard.classList.add(colorClass);
  newCard.innerHTML = `<h2>${getGacha ? "Gold" : "Basic"}</h2>`;

  cards.appendChild(newCard);
}

button.addEventListener("click", () => {
  const checked = input.checked;
  floatingButton.style.visibility = "visible";

  if (checked) {
    button.disabled = true;
    floatingButton.disabled = true;
    floatingButton.style.cursor = "not-allowed";

    for (let i = 0; i < MAX_AMOUNT; i++) {
      setTimeout(() => {
        createCardElement();

        if (i === MAX_AMOUNT - 1) {
          button.disabled = false;
          floatingButton.disabled = false;
          floatingButton.style.cursor = "pointer";
        }
      }, i * 500);
    }
  } else {
    createCardElement();
  }
});

function closeGacha() {
  cardContainer.style.visibility = "hidden";
  floatingButton.style.visibility = "hidden";
  removeCardElementsWithDelay(cards, 500);
}
