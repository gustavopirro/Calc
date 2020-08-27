class Calculator {
    constructor () {
        this.buffers = [0, 0];
        this.currentOperation = Operation.sum;
        this.isFirstOperation = true;
        this.onScreenMemory = "";
    }
    pressNumber (n) {
        this.onScreenMemory += n
        if (this.isFirstOperation) {
            this.buffers[0] = parseInt(this.onScreenMemory);
        } else {
            this.buffers[1] = parseInt(this.onScreenMemory);
        }
        this.updateVisor();
    }
    pressOperation (operation) {
        if (!this.isFirstOperation) {
            this.collapseBuffers();
        }
        this.currentOperation = operation;
        this.onScreenMemory = "";
        this.isFirstOperation = false;
    }
    calculateResultFromBuffers (operation) {
        return operation(this.buffers[0], this.buffers[1]);
    }
    collapseBuffers () {
        const result = this.calculateResultFromBuffers(this.currentOperation);

        this.buffers[0] = result;
        this.buffers[1] = 0;
        this.onScreenMemory = this.buffers[0].toString();
        this.isFirstOperation = true;

        this.updateVisor();
    }
    pressEqual () {
        this.collapseBuffers();
    }
    updateVisor () { // TODO: Move UI drawing code out of this class completely
        document.getElementById("visor").innerHTML = this.onScreenMemory;
    }
    resetAllStates () {
        this.buffers[0] = 0;
        this.buffers[1] = 0;
        this.currentOperation = sum;
        this.isFirstOperation = true;
        this.onScreenMemory = "";

        this.updateVisor();
    }
    clear () {
        this.resetAllStates();
    }
}