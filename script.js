"use strict";

const rules = document.querySelector(".rules");
const rulesBox = document.querySelector(".rules__box");
const closeRuleBox = document.querySelector(".close__icon");
const overlay = document.querySelector(".overlay");

const firstSection = document.querySelector(".section");
const firstSectionContainer = document.querySelector(".section__container");
const paperHand = document.querySelector(".paper__img");
const scissorsHand = document.querySelector(".scissors__img");
const rockHand = document.querySelector(".rock__img");

const pickedSection = document.querySelector(".pick__section-1");
const youPicked = document.querySelector(".you__picked");
const housePicked = document.querySelector(".house__picked");

rules.addEventListener("click", function () {
  rulesBox.style.display = "flex";
  overlay.style.display = "block";
});
closeRuleBox.addEventListener("click", function () {
  rulesBox.style.display = "none";
  overlay.style.display = "none";
});

const compOptions = [paperHand, scissorsHand, rockHand];
// console.log(compOptions);

function computerPlay() {
  return compOptions[Math.floor(Math.random() * compOptions.length)];
}
// console.log(computerSelection);
firstSectionContainer.addEventListener("click", function (e) {
  const computerSelection = computerPlay();
  if (e.target.classList.contains("paper__img")) {
    firstSection.style.display = "none";
    // console.log(e.target);
    // console.log(e.target.classList);
    // console.log(e.target.alt);
    // console.log(e.target.src);

    pickedSection.style.display = "grid";
    youPicked.textContent = "";
    youPicked.insertAdjacentHTML(
      "beforeend",
      `
      <h3 class="picked__heading">You picked</h3>
      <div class="you__picked-img">
        <img
          src="${e.target.src}"
          alt="${e.target.alt}"
          class="${e.target.classList} chosen__img"
        /> 
        <div class="bg bg-1"></div>
        <div class="bg bg-2"></div>
        <div class="bg bg-3"></div>
      </div>
      `
    );

    setTimeout(() => {
      housePicked.textContent = "";
      const alt = computerSelection.alt;
      const classList =
        alt === "rock hand"
          ? `${computerSelection.classList} chosen__rock-img`
          : `${computerSelection.classList} chosen__img`;

      housePicked.insertAdjacentHTML(
        "beforeend",
        `
        <h3 class="picked__heading">The House picked</h3>
        <div class="house__picked-img">
          <img
            src="${computerSelection.src}"
            alt="${alt}"
            class="${classList}"
          /> 
          <div class="bg bg-1"></div>
          <div class="bg bg-2"></div>
          <div class="bg bg-3"></div>
        </div>
        `
      );
    }, 1000);
  }
  if (e.target.classList.contains("rock__img")) {
    firstSection.style.display = "none";
    // console.log(e.target);
    // console.log(e.target.classList);
    // console.log(e.target.alt);
    // console.log(e.target.src);

    pickedSection.style.display = "grid";
    youPicked.textContent = "";
    youPicked.insertAdjacentHTML(
      "beforeend",
      `
      <h3 class="picked__heading">You picked</h3>
      <div class="you__picked-img">
        <img
          src="${e.target.src}"
          alt="${e.target.alt}"
          class="${e.target.classList} chosen__rock-img"
        /> 
        <div class="bg bg-1"></div>
        <div class="bg bg-2"></div>
        <div class="bg bg-3"></div>
      </div>
      `
    );
    setTimeout(() => {
      housePicked.textContent = "";
      const alt = computerSelection.alt;
      const classList =
        alt === "rock hand"
          ? `${computerSelection.classList} chosen__rock-img`
          : `${computerSelection.classList} chosen__img`;

      housePicked.insertAdjacentHTML(
        "beforeend",
        `
        <h3 class="picked__heading">The House picked</h3>
        <div class="house__picked-img">
          <img
            src="${computerSelection.src}"
            alt="${alt}"
            class="${classList}"
          /> 
          <div class="bg bg-1"></div>
          <div class="bg bg-2"></div>
          <div class="bg bg-3"></div>
        </div>
        `
      );
    }, 1000);
  }
  if (e.target.classList.contains("scissors__img")) {
    firstSection.style.display = "none";
    // console.log(e.target);
    // console.log(e.target.classList);
    // console.log(e.target.alt);
    // console.log(e.target.src);

    pickedSection.style.display = "grid";
    youPicked.textContent = "";
    youPicked.insertAdjacentHTML(
      "beforeend",
      `
      <h3 class="picked__heading">You picked</h3>
      <div class="you__picked-img">
        <img
          src="${e.target.src}"
          alt="${e.target.alt}"
          class="${e.target.classList} chosen__img"
        /> 
        <div class="bg bg-1"></div>
        <div class="bg bg-2"></div>
        <div class="bg bg-3"></div>
      </div>
      `
    );
    setTimeout(() => {
      housePicked.textContent = "";
      const alt = computerSelection.alt;
      const classList =
        alt === "rock hand"
          ? `${computerSelection.classList} chosen__rock-img`
          : `${computerSelection.classList} chosen__img`;

      housePicked.insertAdjacentHTML(
        "beforeend",
        `
        <h3 class="picked__heading">The House picked</h3>
        <div class="house__picked-img">
          <img
            src="${computerSelection.src}"
            alt="${alt}"
            class="${classList}"
          /> 
          <div class="bg bg-1"></div>
          <div class="bg bg-2"></div>
          <div class="bg bg-3"></div>
        </div>
        `
      );
    }, 1000);
  }
});
