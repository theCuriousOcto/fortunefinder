import GridStates from "./grid-states";

export default class GridSquare {
    constructor(num, isValid) {
        this.num = num;
        this.isValid = isValid;
        this.state = isValid ? GridStates.hidden : GridStates.empty;
        this.hasChest = false;
    }
}