class Calculator {
    constructor () {
        this.accumulators = [0, 0];
        this.currentOperation = Operation.add;
        this.isFirstOperation = true;
        this.screenBuffer = "0";
        this.updateVisor();
    }
    pressNumber (n) {
        this.screenBuffer = this.screenBuffer == "0" ? n : this.screenBuffer + n;
        if (this.isFirstOperation) {
            this.accumulators[0] = parseInt(this.screenBuffer);
        } else {
            this.accumulators[1] = parseInt(this.screenBuffer);
        }
        this.updateVisor();
    }
    pressOperation (operation) {
        if (!this.isFirstOperation) {
            this.collapseAccumulators();
        }
        this.currentOperation = operation;
        this.screenBuffer = "0";
        this.isFirstOperation = false;
    }
    calculateResultFromAccumulators (operation) {
        return operation(this.accumulators[0], this.accumulators[1]);
    }
    collapseAccumulators () {
        const result = this.calculateResultFromAccumulators(this.currentOperation);

        this.accumulators[0] = result;
        this.accumulators[1] = 0;
        this.screenBuffer = this.accumulators[0].toString();
        this.isFirstOperation = true;

        this.updateVisor();
    }
    pressEqual () {
        this.collapseAccumulators();
    }
    updateVisor () { // TODO: Move UI drawing code out of this class completely
        document.getElementById("visor").innerHTML = this.screenBuffer;
    }
    resetAllStates () {
        this.accumulators[0] = 0;
        this.accumulators[1] = 0;
        this.currentOperation = Operation.add;
        this.isFirstOperation = true;
        this.screenBuffer = "0";

        this.updateVisor();
    }
    clear () {
        this.resetAllStates();
    }
}