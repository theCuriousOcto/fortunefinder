import GridStates from "./grid-states";

export default class GridSquare {
    constructor(num, isValid, state = null, hasChest = false) {
        this.num = num;
        this.isValid = isValid;
        this.state = state ?? (isValid ? GridStates.HIDDEN : GridStates.EMPTY);
        this.hasChest = hasChest;
    }

    serialize() {
        return {
            num: this.num,
            isValid: this.isValid,
            state: this.state,
            hasChest: this.hasChest
        };
    }

    deserialize(squareObj) {
        const {num, isValid, state, hasChest} = squareObj;
        return new GridSquare(num, isValid, state, hasChest);
    }
}