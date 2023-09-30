const container = document.querySelector(".container");
const boardSize = 720;

function addBoxes(boxCount) {
  const boxSize = boardSize / boxCount + "px";

  for (let i = 0; i < boxCount; i++) {
    for (let j = 0; j < boxCount; j++) {
      const div = document.createElement("div");
      div.style.width = boxSize;
      div.style.height = boxSize;
      div.style.border = "1px solid gray";
      container.appendChild(div);
      div.addEventListener("mouseenter", (e) => fillBox(e));
    }
  }
}

function fillBox(event) {
  event.target.style.backgroundColor = "black";
}

let boxCount = +prompt("How many boxes do you want?");
if (boxCount > 64) {
  alert("You may only enter a number up to 64!");
  boxCount = +prompt("How many boxes do you want?");
}
addBoxes(boxCount);
