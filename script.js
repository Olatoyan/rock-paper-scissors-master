"use strict";

const rules = document.querySelector(".rules");
const rulesBox = document.querySelector(".rules__box");
const closeRuleBox = document.querySelector(".close__icon");
const overlay = document.querySelector(".overlay");

const scoreCount = document.querySelector(".score__count");

const firstSection = document.querySelector(".section");
const firstSectionContainer = document.querySelector(".section__container");
const paperHand = document.querySelector(".paper__img");
const scissorsHand = document.querySelector(".scissors__img");
const rockHand = document.querySelector(".rock__img");

const pickedSection = document.querySelector(".pick__section-1");
const youPicked = document.querySelector(".you__picked");
const housePicked = document.querySelector(".house__picked");
const housePickedImg = document.querySelector(".house__picked-img");

const winSection = document.querySelector(".win__section");
const loseSection = document.querySelector(".lose__section");
const drawSection = document.querySelector(".draw__section");
let score = (scoreCount.textContent = 0);

const displayRulesBox = () => {
  rulesBox.style.display = "flex";
  overlay.style.display = "block";
};

const hideRulesBox = () => {
  rulesBox.style.display = "none";
  overlay.style.display = "none";
};

rules.addEventListener("click", displayRulesBox);
closeRuleBox.addEventListener("click", hideRulesBox);
overlay.addEventListener("click", hideRulesBox);

const compOptions = [paperHand, scissorsHand, rockHand];

function computerPlay() {
  return compOptions[Math.floor(Math.random() * compOptions.length)];
}

firstSectionContainer.addEventListener("click", function (e) {
  const computerSelection = computerPlay();
  if (e.target.classList.contains("paper__img")) {
    firstSection.style.display = "none";

    pickedSection.style.display = "grid";
    youPicked.textContent = "";
    youPicked.insertAdjacentHTML(
      "beforeend",
      `
      <h3 class="picked__heading">You picked</h3>
      <div class="you__picked-img">
        <img
          src="${e.target.getAttribute("src")}"
          alt="${e.target.alt}"
          class="${e.target.classList} chosen__img"
        />
      
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
          src="${computerSelection.getAttribute("src")}"
            alt="${alt}"
            class="${classList}"
          />
        
        </div>
        `
      );
    }, 1000);
  }
  if (e.target.classList.contains("rock__img")) {
    firstSection.style.display = "none";

    pickedSection.style.display = "grid";
    youPicked.textContent = "";
    youPicked.insertAdjacentHTML(
      "beforeend",
      `
      <h3 class="picked__heading">You picked</h3>
      <div class="you__picked-img">
        <img
          src="${e.target.getAttribute("src")}"
          alt="${e.target.alt}"
          class="${e.target.classList} chosen__rock-img"
        /> 
     
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
            src="${computerSelection.getAttribute("src")}"
            alt="${alt}"
            class="${classList}"
          /> 
        
        </div>
        `
      );
    }, 1000);
  }
  if (e.target.classList.contains("scissors__img")) {
    firstSection.style.display = "none";

    pickedSection.style.display = "grid";
    youPicked.textContent = "";
    youPicked.insertAdjacentHTML(
      "beforeend",
      `
      <h3 class="picked__heading">You picked</h3>
      <div class="you__picked-img">
        <img
          src="${e.target.getAttribute("src")}"
          alt="${e.target.alt}"
          class="${e.target.classList} chosen__img"
        /> 
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
            src="${computerSelection.getAttribute("src")}"
            alt="${alt}"
            class="${classList}"
          /> 
        </div>
        `
      );
    }, 1000);
  }

  const playerSelection = youPicked
    .querySelector(".you__picked-img")
    .querySelector("img");

  if (
    (playerSelection.alt === "rock hand" &&
      computerSelection.alt === "scissors hand") ||
    (playerSelection.alt === "scissors hand" &&
      computerSelection.alt === "paper hand") ||
    (playerSelection.alt === "paper hand" &&
      computerSelection.alt === "rock hand")
  ) {
    setTimeout(() => {
      pickedSection.style.display = "none";
      winSection.style.display = "grid";
      winSection.textContent = "";

      const alt = computerSelection.alt;
      const classList =
        alt === "rock hand"
          ? `${computerSelection.classList} chosen__rock-img`
          : `${computerSelection.classList} chosen__img`;
      const youClassList =
        e.target.alt === "rock hand"
          ? `${e.target.classList} chosen__rock-img`
          : `${e.target.classList} chosen__img`;

      winSection.insertAdjacentHTML(
        "beforeend",
        `
      <div class="you__picked">
      <h3 class="win__heading">You picked</h3>
      <div class="you__picked-img">
      <img
      src="${e.target.getAttribute("src")}"
      alt="${e.target.alt}"
      class="${youClassList}"
    />
        <div class="bg bg-1"></div>
        <div class="bg bg-2"></div>
        <div class="bg bg-3"></div>
      </div>
    </div>
    <div class="win__box">
      <h3 class="win__heading">You win</h3>
      <button class="btn win__btn">Play again</button>
    </div>
    <div class="house__picked">
    <h3 class="win__heading">The house picked</h3>
      <div class="house__picked-img">
      <img
      src="${computerSelection.getAttribute("src")}"
      alt="${alt}"
        class="${classList}"
        />
      </div>
    </div>
    `
      );
      const winBtn = document.querySelector(".win__btn");
      winBtn.addEventListener("click", function (e) {
        firstSection.style.display = "flex";

        pickedSection.style.display = "none";
        winSection.style.display = "none";
        loseSection.style.display = "none";
        drawSection.style.display = "none";
        housePicked.textContent = "";
      });
      scoreCount.textContent++;
    }, 2000);
  } else if (
    (playerSelection.alt === "rock hand" &&
      computerSelection.alt === "paper hand") ||
    (playerSelection.alt === "paper hand" &&
      computerSelection.alt === "scissors hand") ||
    (playerSelection.alt === "scissors hand" &&
      computerSelection.alt === "rock hand")
  ) {
    setTimeout(() => {
      pickedSection.style.display = "none";
      loseSection.style.display = "grid";
      loseSection.textContent = "";
      const alt = computerSelection.alt;
      const classList =
        alt === "rock hand"
          ? `${computerSelection.classList} chosen__rock-img`
          : `${computerSelection.classList} chosen__img`;
      const youClassList =
        e.target.alt === "rock hand"
          ? `${e.target.classList} chosen__rock-img`
          : `${e.target.classList} chosen__img`;

      loseSection.insertAdjacentHTML(
        "beforeend",
        `
        <div class="you__picked">
        <h3 class="lose__heading">You picked</h3>
        <div class="you__picked-img">
        <img
        src="${e.target.getAttribute("src")}"
        alt="${e.target.alt}"
        class="${youClassList}"
      />
        </div>
      </div>
      <div class="lose__box">
        <h3 class="lose__heading">You lose</h3>
        <button class="btn lose__btn">Play again</button>
      </div>
      <div class="house__picked">
        <h3 class="lose__heading">The house picked</h3>
        <div class="house__picked-img">
        <img
        src="${computerSelection.getAttribute("src")}"
          alt="${alt}"
          class="${classList}"
        />
          <div class="bg bg-1"></div>
          <div class="bg bg-2"></div>
          <div class="bg bg-3"></div>
        </div>
      </div>
        `
      );

      const loseBtn = document.querySelector(".lose__btn");
      loseBtn.addEventListener("click", function (e) {
        firstSection.style.display = "flex";
        pickedSection.style.display = "nond";
        winSection.style.display = "none";
        loseSection.style.display = "none";
        drawSection.style.display = "none";
        housePicked.textContent = "";
      });
      scoreCount.textContent--;
    }, 2000);
  } else if (
    (playerSelection.alt === "rock hand" &&
      computerSelection.alt === "rock hand") ||
    (playerSelection.alt === "paper hand" &&
      computerSelection.alt === "paper hand") ||
    (playerSelection.alt === "scissors hand" &&
      computerSelection.alt === "scissors hand")
  ) {
    setTimeout(() => {
      const alt = computerSelection.alt;
      const classList =
        alt === "rock hand"
          ? `${computerSelection.classList} chosen__rock-img`
          : `${computerSelection.classList} chosen__img`;
      pickedSection.style.display = "none";
      drawSection.style.display = "grid";
      drawSection.textContent = "";
      const youClassList =
        e.target.alt === "rock hand"
          ? `${e.target.classList} chosen__rock-img`
          : `${e.target.classList} chosen__img`;

      drawSection.insertAdjacentHTML(
        "beforeend",
        `
        <div class="you__picked">
        <h3 class="draw__heading">You picked</h3>
        <div class="you__picked-img">
        <img
        src="${e.target.getAttribute("src")}"
        alt="${e.target.alt}"
        class="${youClassList}"
      />
        </div>
      </div>
      <div class="draw__box">
        <h3 class="draw__heading">Its a tie</h3>
        <button class="btn draw__btn">Play again</button>
      </div>
      <div class="house__picked">
        <h3 class="draw__heading">The house picked</h3>
        <div class="house__picked-img">
        <img
        src="${computerSelection.getAttribute("src")}"
          alt="${alt}"
          class="${classList}"
        />
        </div>
      </div>
        `
      );
      const drawBtn = document.querySelector(".draw__btn");
      drawBtn.addEventListener("click", function (e) {
        firstSection.style.display = "flex";
        pickedSection.style.display = "none";
        winSection.style.display = "none";
        loseSection.style.display = "none";
        drawSection.style.display = "none";
        housePicked.textContent = "";
      });
      scoreCount.textContent = scoreCount.textContent;
    }, 2000);
  }
});
