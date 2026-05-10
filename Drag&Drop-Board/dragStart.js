export function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}
export function dragEnd(event) {
  console.log("drag stop");
}
export function dragLeave(event) {
  event.target.classList.remove("over");
}
export function dragOver(event) {
  event.target.classList.add("over");
  event.preventDefault();
}
export function dragEnter(event) {
  event.preventDefault();
}
export function dragDrop(event) {
  event.preventDefault();
  const id = dataTransfer.getData("text/plain");
  const card = document.getElementById(id);
  this.target.appendChild(card);
}
