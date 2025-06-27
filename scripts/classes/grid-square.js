import GridStates from "./grid-states";

export default class GridSquare {
    constructor(num, isValid, state = null, hasChest = false) {
        this.num = num;
        this.isValid = isValid;
        this.state = state ?? (isValid ? GridStates.HIDDEN : GridStates.EMPTY);
        this.hasChest = hasChest;
    }

    static fromObject(obj) {
        const {num, isValid, state, hasChest} = obj;
        return new GridSquare(num, isValid, state, hasChest);
    }
}