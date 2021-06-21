// DOM QuerySelector

const slide = document.querySelector(".image-container img");

const indicators = document.querySelectorAll(".indicator");

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const ind_1 = document.querySelector("#indicator-1");
const ind_2 = document.querySelector("#indicator-2");
const ind_3 = document.querySelector("#indicator-3");
const ind_4 = document.querySelector("#indicator-4");
const ind_5 = document.querySelector("#indicator-5");
const ind_6 = document.querySelector("#indicator-6");

//////////////////////////////////////////////////
// Click Next Button

nextBtn.addEventListener("click", nextSlide);

let numberOfSlide = 1;
function nextSlide() {
  // Click next Button below 5
  if (numberOfSlide < indicators.length) {
    numberOfSlide++;
    slide.src = `imgs/${numberOfSlide}.jpg`;
  }
  // Click next Button above 5
  else {
    numberOfSlide = 1;
    slide.src = `imgs/${numberOfSlide}.jpg`;
  }
}

// Click Previous Button

prevBtn.addEventListener("click", prevSlide);

function prevSlide() {
  // Click previous button below 5
  if (numberOfSlide > 1) {
    numberOfSlide--;
    slide.src = `imgs/${numberOfSlide}.jpg`;
  }
  // Click previous button at number 1
  else {
    numberOfSlide = indicators.length;
    slide.src = `imgs/${numberOfSlide}.jpg`;
  }
}

//////////////////////////////////////////////////
// Indicator

// Next Indicator

nextBtn.addEventListener("click", nextIndicator);

let currentIndicator = 0;
function nextIndicator() {
  // Increase Indicator Only below 4 [5 in slide number] (indicators = [0, 1, 2, 3, 4])
  if (currentIndicator < indicators.length - 1) {
    indicators[currentIndicator].classList.remove("indicator-current");
    indicators[currentIndicator].nextElementSibling.classList.add(
      "indicator-current"
    );
    currentIndicator++;
  }

  // Change indicator to 0 [1 in slide number] above 4 [5 in slide number] (indicators = [0, 1, 2, 3, 4])
  else {
    indicators[currentIndicator].classList.remove("indicator-current");
    currentIndicator = 0;
    indicators[currentIndicator].classList.add("indicator-current");
  }
}

// Click Previous Indicator

prevBtn.addEventListener("click", prevIndicator);

//

function prevIndicator() {
  // Decrease indicator Only above 1
  if (currentIndicator > 1) {
    indicators[currentIndicator].classList.remove("indicator-current");
    indicators[currentIndicator].previousElementSibling.classList.add(
      "indicator-current"
    );
    currentIndicator--;
  }

  // Change current indicator to number 4 [5 in slide number]
  else {
    indicators[currentIndicator].classList.remove("indicator-current");
    currentIndicator = 4;
    indicators[currentIndicator].classList.add("indicator-current");
  }
}

/////////////////////////////////////////////
// Click indicator

ind_1.addEventListener("click", ind_1_click);
ind_2.addEventListener("click", ind_2_click);
ind_3.addEventListener("click", ind_3_click);
ind_4.addEventListener("click", ind_4_click);
ind_5.addEventListener("click", ind_5_click);
ind_6.addEventListener("click", ind_6_click);

function ind_1_click() {
  numberOfSlide = 1;
  slide.src = `imgs/${numberOfSlide}.jpg`;

  indicators[currentIndicator].classList.remove("indicator-current");
  currentIndicator = 0;
  indicators[currentIndicator].classList.add("indicator-current");
}

function ind_2_click() {
  numberOfSlide = 2;
  slide.src = `imgs/${numberOfSlide}.jpg`;

  indicators[currentIndicator].classList.remove("indicator-current");
  currentIndicator = 1;
  indicators[currentIndicator].classList.add("indicator-current");
}

function ind_3_click() {
  numberOfSlide = 3;
  slide.src = `imgs/${numberOfSlide}.jpg`;

  indicators[currentIndicator].classList.remove("indicator-current");
  currentIndicator = 2;
  indicators[currentIndicator].classList.add("indicator-current");
}

function ind_4_click() {
  numberOfSlide = 4;
  slide.src = `imgs/${numberOfSlide}.jpg`;

  indicators[currentIndicator].classList.remove("indicator-current");
  currentIndicator = 3;
  indicators[currentIndicator].classList.add("indicator-current");
}

function ind_5_click() {
  numberOfSlide = 5;
  slide.src = `imgs/${numberOfSlide}.jpg`;

  indicators[currentIndicator].classList.remove("indicator-current");
  currentIndicator = 4;
  indicators[currentIndicator].classList.add("indicator-current");
}

function ind_6_click() {
  numberOfSlide = 6;
  slide.src = `imgs/${numberOfSlide}.jpg`;

  indicators[currentIndicator].classList.remove("indicator-current");
  currentIndicator = 5;
  indicators[currentIndicator].classList.add("indicator-current");
}
