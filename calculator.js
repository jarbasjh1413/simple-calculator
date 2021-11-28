let number1 = 1;
number2 = 2, operation = "*"

const calculate = (number1, number2, operation) => {

    let result;
    switch (operation) {
        case "+":
            result = number1 + number2
            break;
        case "-":
            result = number1 - number2
            break
        case "*":
            result = number1 * number2
            break;
        case "/":
            result = number1 / number2
        default:
            console.log('operação inválda');
    }

    return result;

}

console.log(calculate(number1, number2, operation));