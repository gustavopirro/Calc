let bufferNumber1 = 0, bufferNumber2 = 0, currentOperation = sum, isFirstOperation = true, onScreenMemory = "";

function button (n) {
    onScreenMemory += n
    if (isFirstOperation) {
        bufferNumber1 = parseInt(onScreenMemory)
    } else {
        bufferNumber2 = parseInt(onScreenMemory)
    }
    updateVisor()
}

function operation (op) {
    if (!isFirstOperation) {
        pushResultToBuffer1()
    }
    currentOperation = op
    onScreenMemory = ""
    isFirstOperation = false
}

function calculate () {
    return currentOperation(bufferNumber1, bufferNumber2)
}

function pushResultToBuffer1 () {
    const result = calculate()
    bufferNumber1 = result
    bufferNumber2 = 0
    onScreenMemory = bufferNumber1.toString()
    isFirstOperation = true
    updateVisor()
}

function updateVisor () {
    document.getElementById("visor").innerHTML = onScreenMemory.substring(0,11)
}

function clr(){
    bufferNumber1 = 0
    bufferNumber2 = 0
    currentOperation = sum
    isFirstOperation = true
    onScreenMemory = ""
    updateVisor()
}