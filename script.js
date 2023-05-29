const input = document.querySelector("input[type=checkbox]");
const button = document.querySelector("button");
const cards = document.querySelector("#cards");
const cardContainer = document.querySelector('.card-container');
const card = document.querySelectorAll(".card");

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
  newCard.innerHTML = `<h2>${getGacha ? 'Gold' : 'Basic'}</h2>`;

  cards.appendChild(newCard);
}

button.addEventListener("click", () => {
  const checked = input.checked;

  if (checked) {
    button.disabled = true;
    removeCardElementsWithDelay(cards, 500);
    const allIn = 10;

    for (let i = 0; i < allIn; i++) {
      setTimeout(() => {
        createCardElement();

        if (i === allIn - 1) {
          button.disabled = false;
        }
      }, i * 500);
    }
  } else {
    removeCardElementsWithDelay(cards, 500);
    createCardElement();
  }
});


cardContainer.addEventListener('click', ({ target }) => {
  let isCardClicked = false;

  card.forEach((cardElement) => {
    if (cardElement.contains(target)) {
      isCardClicked = true;
      console.log("test")
    }
  });

  if (!isCardClicked) {
    cardContainer.style.visibility = "hidden";
    removeCardElementsWithDelay(cards, 500);
  }
});


