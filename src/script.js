const container = document.querySelector(".container");
const boardSize = 960;

function addBoxes(boxCount) {
  for (let i = 0; i < boxCount; i++) {
    for (let j = 0; j < boxCount; j++) {
      const div = document.createElement("div");
      div.style.width = boardSize / boxCount + "px";
      div.style.height = boardSize / boxCount + "px";
      div.style.border = "1px solid gray";
      container.appendChild(div);
    }
  }
}

addBoxes(16);
