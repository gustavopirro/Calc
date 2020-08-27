let number1, number2, lastOperation, memoryFull = 0, lastNumber;
document.getElementById("visor").innerText = 0;

function button(n) {
    if (memoryFull === 1) {
        number2 = document.getElementById("visor").innerHTML + n;
        document.getElementById("visor").innerText = number2;

        return;
    }
    if (document.getElementById("visor").innerText == 0) {
        number1 = n;
        document.getElementById("visor").innerText = number1;
    } else {
        number1 = document.getElementById("visor").innerHTML + n;
        document.getElementById("visor").innerText = number1;
    }
    
console.log("N1: " + number1 + "N2: " + number2 + "lastOp: " + lastOperation)
}

function sum(x, y) { return parseFloat(x) + parseFloat(y) }
function sub(x, y) { return parseFloat(x) - parseFloat(y) }
function div(x, y) { return parseFloat(x) / parseFloat(y) }
function mult(x, y) { return parseFloat(x) * parseFloat(y) }

function operation(op) {

    function isMemoryFull() {
        if (memoryFull === 1 && number2 !== undefined) {
            number1 = op((number1), (number2));
            number2 = undefined;
            document.getElementById("visor").innerText = number1;
        } else {
            memoryFull = 1;

        }
    }
    
console.log("N1: " + number1 + "N2: " + number2 + "lastOp: " + lastOperation)
    lastOperation = op
    
console.log("N1: " + number1 + "N2: " + number2 + "lastOp: " + lastOperation)
    isMemoryFull();
    document.getElementById("visor").innerText = ""
}

function equal() {
    if (number1 !== undefined) {
        memoryFull = 0;
        if (number2 == undefined) {
            document.getElementById("visor").innerText = parseFloat(number1)
        } else {
            
console.log("N1: " + number1 + "N2: " + number2 + "lastOp: " + lastOperation)
            number1 = lastOperation(parseFloat(number1), parseFloat(number2));
        }
        document.getElementById("visor").innerText = number1;
        number2 = undefined;
    }
}

function clr() {
    number1 = undefined
    number2 = undefined
    lastOperation = undefined
    memoryFull = 0
    document.getElementById("visor").innerText = "0"
}