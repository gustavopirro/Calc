let number1, number2, lastOperation, memoryFull = 0;

function button(n) {
    if (memoryFull != 1) {
        number1 = document.getElementById("visor").innerHTML + n;
        document.getElementById("visor").innerText = number1;
    } else {
        number2 = document.getElementById("visor").innerHTML + n;
        document.getElementById("visor").innerText = number2;
    }
}

function sum(x, y) { return parseFloat(x) + parseFloat(y) }
function sub(x, y) { return parseFloat(x) - parseFloat(y) }
function div(x, y) { return parseFloat(x) / parseFloat(y) }
function mult(x, y) { return parseFloat(x) * parseFloat(y) }

function operation(op) {

    function isMemoryFull() {
        if (memoryFull === 1) {
            number1 = op((number1), (number2));
            number2 = undefined;
            document.getElementById("visor").innerText = number1;
        } else {
            memoryFull = 1;

        }
    }
    lastOperation = op
    isMemoryFull();
    document.getElementById("visor").innerText = ""
}

function clr(){
    console.log("a")
    number1 = undefined
    number2 = undefined
    lastOperation = undefined
    memoryFull = 0
    document.getElementById("visor").innerText = "0"
}

function equal() {
    if (number1 !== undefined) {
        console.log("n1: " + number1 + "n2: " + number2)
        memoryFull = 0;
        switch (lastOperation) {
            case sum:
                if (number2 == undefined) {
                    document.getElementById("visor").innerText = parseFloat(number1)
                } else {
                    number1 = parseFloat(number1) + parseFloat(number2);
                }
                document.getElementById("visor").innerText = number1;
                number2 = undefined;
                break;

            case sub:
                if (number2 == undefined) {
                    document.getElementById("visor").innerText = parseFloat(number1)
                } else {
                    number1 = parseFloat(number1) - parseFloat(number2);
                }
                document.getElementById("visor").innerText = number1;
                number2 = undefined;
                break;

            case mult:
                if (number2 == undefined) {
                    document.getElementById("visor").innerText = parseFloat(number1)
                } else {
                    number1 = parseFloat(number1) * parseFloat(number2);
                }
                document.getElementById("visor").innerText = number1;
                number2 = undefined;
                break;

            case div:
                if (number2 == undefined) {
                    document.getElementById("visor").innerText = parseFloat(number1)
                } else {
                    number1 = parseFloat(number1) / parseFloat(number2);
                }
                document.getElementById("visor").innerText = number1;
                number2 = undefined;
                break;

        }

    }
}