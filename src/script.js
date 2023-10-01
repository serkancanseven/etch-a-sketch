const BOARD_SIZE = 464;
const DEFAULT_BOX_COUNT = 16;
const BORDER_COLOR = "#9C9EA075";
const FILL_COLOR = "#6A6F72";

const container = document.querySelector(".container");
const button = document.querySelector(".change");
button.addEventListener("click", changeBoxSize);

function createBox(size) {
  const div = document.createElement("div");
  div.style.width = size;
  div.style.height = size;
  div.style.border = `1px solid ${BORDER_COLOR}`;
  div.addEventListener("mouseenter", fillBox);
  return div;
}

function addBoxes(boxCount) {
  const boxSize = BOARD_SIZE / boxCount + "px";
  for (let i = 0; i < boxCount; i++) {
    for (let j = 0; j < boxCount; j++) {
      const div = createBox(boxSize);
      container.appendChild(div);
    }
  }
}

function changeBoxSize() {
  let boxCount = +prompt("Enter the number of boxes (up to 64):");
  if (isNaN(boxCount) || boxCount <= 0 || boxCount > 64) {
    alert("Please enter a number between 1 and 64.");
    return;
  }
  clearContainer();
  addBoxes(boxCount);
}

function clearContainer() {
  container.innerHTML = "";
}

function fillBox(event) {
  event.target.style.backgroundColor = FILL_COLOR;
}

addBoxes(DEFAULT_BOX_COUNT);
