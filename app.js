let bufferNumber1 = 0, bufferNumber2 = 0, currentOperation, isFirstOperation = true, onScreenMemory = "";

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
    currentOperation = op
    onScreenMemory = ""
    isFirstOperation = false
    updateVisor()
}

function calculate () {
    return currentOperation(bufferNumber1, bufferNumber2)
}

function pushResultToBuffer1 () {
    const result = calculate(currentOperation)
    bufferNumber1 = result
    bufferNumber2 = 0
    onScreenMemory = bufferNumber1.toString()
    isFirstOperation = true
    updateVisor()
}

function updateVisor () {
    document.getElementById("visor").innerHTML = onScreenMemory
}

function clearAll(){
    number1 = undefined
    number2 = undefined
    lastOperation = undefined
    memoryFull = 0
    document.getElementById("visor").innerText = ""
}