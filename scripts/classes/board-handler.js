import GridSquare from "./grid-square";

export default class BoardHandler {
    #num;
    #chestMax;
    #xMax;
    #map;

    constructor(num, chests, x, map) {
        this.#num = num;
        this.#chestMax = chests;
        this.#xMax = x;
        this.#map = map instanceof Map ? map : new Map(map);
    }

    static hasSavedBoard() {
        return !!localStorage.getItem("board");
    }

    static loadBoard() {
        if (!BoardHandler.hasSavedBoard()) {
            console.error("Attempted to load a board when none is present in localStorage.");
            return;
        }

        const rawData = localStorage.getItem("board");
        return new BoardHandler(...JSON.parse(rawData));
    }

    static createBoardFromTemplate(mapArr) {
        const shallowArr = [...mapArr];
        const mapStr = shallowArr.pop();

        const map = new Map();
        const possibleChests = [];
        
        for (let i = 0; i < mapStr.length; i++) {
            const isValid = mapStr[i] === "1";
            if (isValid) possibleChests.push(i);

            const gridSquare = new GridSquare(i, isValid);
            map.set(i, gridSquare);
        }

        const neededChests = shallowArr[1];
        const solutionChests = [];
        const randEl = () => Math.floor(Math.random() * possibleChests.length);

        while (solutionChests.length < neededChests) {
            solutionChests.push(possibleChests.splice(randEl(), 1)[0]);
        }

        solutionChests.forEach(key => map.get(key).hasChest = true);

        shallowArr.push(map);
        return new BoardHandler(...shallowArr);
    }

    saveBoard() {
        const savedBoard = {
            num: this.#num,
            chestMax: this.#chestMax,
            xMax: this.#xMax,
            map: this.#map
        };
        localStorage.setItem("board", JSON.stringify(savedBoard));
    }

    /**
     * Iterates through an array of arrays, getting each Map key and updating provided values.
     * @param {Array} arr - An array consisting of smaller arrays, arranged in [key, value] format.
     * @returns Itself, for chaining.
     */
    updateBoardStates(arr) {
        for (const [key, value] of arr) {
            this.#map.get(key).state = value;
        }

        return this;
    }

    getMap() {
        return this.#map;
    }

    /**
     * 
     * @param {*} keys The array of keys to fetch.
     * @returns A list of arrays containing the GridSquares that'll be used in rendering.
     */
    getSquares(keys) {
        const resultsArr = [];
        for (const key of keys) {
            resultsArr.push(this.#map.get(key));
        }
        return resultsArr;
    }
}