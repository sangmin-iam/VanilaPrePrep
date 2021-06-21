// DOM Selectors
const main = document.querySelector(".main");
const text = document.querySelector(".text");
const button = document.querySelector(".btn");

// Hex Color Code: 0~9, A~F
const hexColorCode = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
// Hex Code Generator
// color 변수 값을 변경 하기 위하여 let Declartion을 사용하였다.
let color = "#";
function hexGenerator() {
  // for 반복문: i는 0에서 시작하여 6보다 작아질 때 까지 실행된다.
  // 0~5 총 6번 반복 된다.
  for (let i = 0; i < 6; i++) {
    // 무작위 수를 생성
    const randomNumber = Math.trunc(Math.random() * hexColorCode.length);

    // hexColorCode Array안에서 무작위로 찾은 값을 pickColor에 담는다.
    const pickColor = hexColorCode[randomNumber];

    // color(String)에 pickColor의 값을 추가
    // i = 0 color = "#A"
    // i = 1 color = "#AB"
    // i = 2 color = "#AB3"
    // i = 3 color = "#AB34"
    // i = 4 color = "#AB347"
    // i = 5 color = "#AB3479"
    color += pickColor;
  }

  //  color = "#AB3479" 값을 return 한다.
  return color;
}

function colorChanger() {
  // hexGenerator()를 실행하여 반환값  color = "#AB3479"을 얻는다.
  hexGenerator();
  // main의 Background-color를 "#AB3479"로 변경한다.
  main.style.backgroundColor = color;
  // text의 Value(텍스트)를 HEX COLOR: #AB3479 로 변경한다.
  text.innerHTML = `HEX COLOR: ${color}`;
  // color의 변수를 초기화한다.
  color = "#";
}

// button을 클릭했을시 colorChanger() function을 호출한다.
// ("click", colorChanger())로 설정할 경우 즉시 호출하기 때문에 꼭 ()를 없애도록 한다.
button.addEventListener("click", colorChanger);
