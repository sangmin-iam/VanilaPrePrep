///////////////////////////////////////////////////
/* DOM Selectors */

const playBtn = document.querySelector("#btn-play");

const guessForm = document.querySelector("#guess-form");
const guessBtn = document.querySelector("#btn-guess");
const guessNum = document.querySelector("#guess-number");

const strikeBall = document.querySelector("#strike-ball");
const resetBtn = document.querySelector("#btn-reset");
const attemps = document.querySelector("#attemps");

const audioStart = document.querySelector("#start-audio");
const audioGuess = document.querySelector("#guess-audio");
const audioHomeRun = document.querySelector("#homerun-audio");

///////////////////////////////////////////////////
/* Play and Generate Three Random Number */

let threeRanNumbers = [];
let answer = [];

// Play Button and Event Handler

playBtn.addEventListener("click", function () {
  playBtn.classList.add("disappear");
  guessForm.classList.remove("disappear");
  audioStart.play();
  answer = generateNumber();

  // 이 방법을 알아냈으나 위에 방법으로도 할 수 있다는 거를 깨닫게 되어 위에 다른방법으로 해결하였습니다.

  /* addEventListner Block 밖에서 const answer = generateNumber(); 을 선언하면
  Play Button을 클릭하기 전에 generateNumber() Function을 실행한다. 이를 방지하기 위해
  Eventlistener Method안에서 glbalThis.answer = generateNumber(); 를 사용한다.
  이렇게 되면 Event Listener 을 클릭했을 때 generateNumber() Function이 실행되게 할 수 있고 또한 glbalThis는 Global이기 때문에 다른 곳에서도 이 Variable에 접근 할 수 있게 된다.*/
  // globalThis.answer = generateNumber();
});

// Genearte three Random Number

function generateNumber() {
  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.trunc(Math.random() * 10);

    /* threeRandomNumber.indexOf(3)
    해석: threeRandDomNumber Array에서 3이라는 숫자를 가진 Index를 찾는다. 만약, 숫자 3을 가지고 있지 않다면 -1이라는 숫자를 반환을 한다. 가지고 있다면 3이라는 숫자를 가진 Index 번호를 찾아 반환을 한다. */
    if (threeRanNumbers.indexOf(randomNumber) === -1) {
      threeRanNumbers.push(randomNumber);
    }

    // 만약 위의 if문이 false라면 push() 메소드가 실행이 되지 않는다. 이 경우 else문이 실행 되며 i--가 실행되고 다시 숫자를 생성하여 array에 새로운 숫자를 넣어주기 위해 for문이 다시 실행 된다.
    else {
      i--;
    }
  }
  return threeRanNumbers;
}

/////////////////////////////////////////////////
/* Guess Button */

guessBtn.addEventListener("click", guess);

// Guess Button- Event Handler

let strikes = [];
let balls = [];
let count = 10;

function guess() {
  const guessValue = guessNum.value;
  // console.log(guessValue.length);

  // Wrong Digit of Number
  if (guessValue.length < 3 || guessValue.length > 3) {
    alert(`세자리 숫자를 입력해주세요😥`);
    count > 0 && count++;
  }

  // Correct Answer - Home Run!
  else if (guessValue == threeRanNumbers.join("") && count < 11) {
    console.log(guessValue);
    console.log("정답입니다!");
    strikeBall.innerHTML = `🎉HOME RUN!🎉`;
    audioHomeRun.play();
  }

  // Strike and Ball
  else if (count < 11) {
    for (i = 0; i < 3; i++) {
      // Strikes - 배열 Guess Value와 Answer의 같은 자리를 비교하여 같으면 Strike 배열에 추가한다.
      if (guessValue[i] == answer[i]) {
        strikes.push(i);
      }
      // Balls - 배열 Guess Value와 Answer의 배열을 비교하여 자리는 다르지만 같은 숫자가 있으면 Ball 배열에 추가한다.
      else if (guessValue.includes(answer[i])) {
        balls.push(i);
      }
    }

    // Show Strikes and Balls on Document
    strikeBall.innerHTML = `Strike: ${strikes.length} Ball: ${balls.length}`;
    audioGuess.play();
  }
  // Number of Attemps - Using Short-circuiting
  count > 0 && count--;
  attemps.innerHTML = `남은 시도 횟수: ${count}`;

  // Reset Strikes and Balls
  strikes = [];
  balls = [];
}

/////////////////////////////////////////////////
/* Reset Button*/

resetBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to reset the game?")) {
    reset();
  }
});

// Reset Handler

function reset() {
  // 1. Reset Number of Attemps
  count = 10;
  attemps.innerHTML = `남은 시도 횟수: ${count}`;
  // 2. Reset Three Number
  threeRanNumbers = [];
  strikeBall.innerHTML = `Strike: 0 Ball: 0`;
  // 3. Show Play Button Again
  playBtn.classList.remove("disappear");
  // 4. Hide Other Elements
  guessForm.classList.add("disappear");
  // 5. Empty Guess Number
  guessNum.value = "";
}

console.log(answer);
