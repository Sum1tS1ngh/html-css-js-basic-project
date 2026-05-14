let boxes = document.getElementsByClassName("box");
let result = document.getElementById("result");
let score = document.getElementsByClassName("score");
let overpage = document.getElementById("overpage");
let array = [];
let win1 = 0;
let win2 = 0;
let index = [];
let click = 0;
let res;
function move(i) {
  if (index.includes(i)) alert("you can't change");
  else {
    index.push(i);

    if (click % 2 === 0) {
      boxes[i].textContent = "✖️";
      array[i] = "*";
    } else {
      boxes[i].textContent = "⭕";
      array[i] = "0";
    }

    if (click >= 4) {
      switch (i) {
        case 0:
          if (
            (array[0] === array[1] && array[1] === array[2]) ||
            (array[0] === array[3] && array[3] === array[6]) ||
            (array[0] === array[4] && array[4] === array[8])
          ) {
            win();
            array[0] === "*"
              ? (win1++, (score[0].textContent = win1))
              : (win2++, (score[1].textContent = win2));
          }
          break;

        case 1:
          if (
            (array[0] === array[1] && array[1] === array[2]) ||
            (array[1] === array[4] && array[4] === array[7])
          ) {
            win();
            array[1] === "*"
              ? (win1++, (score[0].textContent = win1))
              : (win2++, (score[1].textContent = win2));
          }
          break;

        case 2:
          if (
            (array[0] === array[1] && array[1] === array[2]) ||
            (array[2] === array[4] && array[4] === array[6]) ||
            (array[2] === array[5] && array[5] === array[8])
          ) {
            win();
            array[2] === "*"
              ? (win1++, (score[0].textContent = win1))
              : (win2++, (score[1].textContent = win2));
          }
          break;

        case 3:
          if (
            (array[0] === array[3] && array[3] === array[6]) ||
            (array[3] === array[4] && array[4] === array[5])
          ) {
            win();
            array[3] === "*"
              ? (win1++, (score[0].textContent = win1))
              : (win2++, (score[1].textContent = win2));
          }
          break;

        case 4:
          if (
            (array[4] === array[1] && array[1] === array[7]) ||
            (array[8] === array[4] && array[4] === array[0]) ||
            (array[6] === array[4] && array[4] === array[2]) ||
            (array[4] === array[3] && array[3] === array[5])
          ) {
            win();
            array[4] === "*"
              ? (win1++, (score[0].textContent = win1))
              : (win2++, (score[1].textContent = win2));
          }
          break;

        case 5:
          if (
            (array[5] === array[8] && array[5] === array[2]) ||
            (array[5] === array[4] && array[5] === array[3])
          ) {
            win();
            array[5] === "*"
              ? (win1++, (score[0].textContent = win1))
              : (win2++, (score[1].textContent = win2));
          }
          break;

        case 6:
          if (
            (array[6] === array[7] && array[7] === array[8]) ||
            (array[6] === array[3] && array[3] === array[0]) ||
            (array[6] === array[4] && array[4] === array[2])
          ) {
            win();
            array[6] === "*"
              ? (win1++, (score[0].textContent = win1))
              : (win2++, (score[1].textContent = win2));
          }
          break;

        case 7:
          if (
            (array[6] === array[7] && array[7] === array[8]) ||
            (array[7] === array[4] && array[4] === array[1])
          ) {
            win();
            array[7] === "*"
              ? (win1++, (score[0].textContent = win1))
              : (win2++, (score[1].textContent = win2));
          }
          break;

        case 8:
          if (
            (array[6] === array[7] && array[7] === array[8]) ||
            (array[8] === array[5] && array[5] === array[2]) ||
            (array[8] === array[4] && array[4] === array[0])
          ) {
            win();
            array[8] === "*"
              ? (win1++, (score[0].textContent = win1))
              : (win2++, (score[1].textContent = win2));
          }
          break;
      }
    }
    click++;
    if (click == 9) tie();
  }
  console.log(index);
  console.log(array);
}
function restart() {
  index = [];
  array = [];
  for (let box of boxes) {
    box.textContent = "";
  }
  score[0].textContent = "";
  score[1].textContent = "";
  result.textContent = "";

  click = 0;
  win1 = 0;
  win2 = 0;
}
function tie() {
  result.textContent = "it's a tie";
  overpage.style.display = "flex";
}

function win() {
  if (click % 2 == 0) res = "player x win's";
  else res = "player o win's";
  click--;
  result.textContent = res;
  overpage.style.display = "flex";
}
function play_again() {
  array = [];
  index = [];
  click = 0;
  overpage.style.display = "none";
  result.textContent = "";
  for (let box of boxes) {
    box.textContent = "";
  }
}
