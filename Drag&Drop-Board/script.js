const boards = document.querySelectorAll(".board");
const lists = document.querySelectorAll(".list");

for (const list of lists) {
  list.addEventListener("dragstart", dragStart);
  list.addEventListener("dragend", dragEnd);
}
for (const board of boards) {
  board.addEventListener("dragleave", dragLeave);
  board.addEventListener("dragover", dragOver);
  board.addEventListener("dragenter", dragEnter);
  board.addEventListener("drop", dragDrop);
}

function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  console.log("drag start");
  event.target.classList.add("dragging");
}
function dragEnd(event) {
  console.log("drag stop");
  event.target.classList.remove("dragging");
}

function dragOver(event) {
  event.currentTarget.classList.add("over");
  event.preventDefault();
  console.log("drag over");
}

function dragEnter(event) {
  event.preventDefault();
  console.log("drag enter");
}

function dragDrop(event) {
  event.preventDefault();
  const id = event.dataTransfer.getData("text/plain");
  const card = document.getElementById(id);
  event.currentTarget.appendChild(card);
  event.currentTarget.classList.remove("over");
  console.log("drag drop");
}

function dragLeave(event) {
  event.currentTarget.classList.remove("over");
  console.log("drag leave");
}
