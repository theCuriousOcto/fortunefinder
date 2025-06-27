import EventHandler from "./event-handler";

function createSquare(squareObj) {
    const squareEl = document.createElement("div");

    squareEl.classList.add("grid-square");
    squareEl.dataset.key = squareObj.num;
    squareEl.dataset.state = squareObj.state;

    EventHandler.hookUpSquare(squareEl);

    return squareEl;
}

const Renderer = {
    renderFullBoard(boardEl, map) {
        boardEl.innerHTML = "";

        for (const value of [...map.values()]) {
            const square = createSquare(value);
            boardEl.appendChild(square);
        }
    }
}

export default Renderer;