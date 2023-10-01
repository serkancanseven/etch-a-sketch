const boardSize = 464;
const container = document.querySelector(".container");
const button = document.querySelector(".change");
button.addEventListener("click", changeBoxSize);

function addBoxes(boxCount) {
  const boxSize = boardSize / boxCount + "px";
  for (let i = 0; i < boxCount; i++) {
    for (let j = 0; j < boxCount; j++) {
      const div = document.createElement("div");
      div.style.width = boxSize;
      div.style.height = boxSize;
      div.style.border = "1px solid #9C9EA075";
      container.appendChild(div);
      div.addEventListener("mouseenter", (e) => fillBox(e));
    }
  }
}

function changeBoxSize() {
  let boxCount = +prompt("How many boxes do you want?");
  if (boxCount > 64) {
    alert("You may only enter a number up to 64!");
    boxCount = +prompt("How many boxes do you want?");
  }
  if (container.firstElementChild) {
    container.replaceChildren();
  }
  addBoxes(boxCount || 16);
}

function fillBox(event) {
  event.target.style.backgroundColor = "#6A6F72";
}

addBoxes(16);
