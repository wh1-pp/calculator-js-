var op;

function func() {
    var result;
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num1 === 0) {
                result = "Ошибка: деление на ноль";
            } else {
                result = num2 / num1;
            }
            break;
        default:
            result = "Выберите операцию";
    }

    document.getElementById("result").innerHTML = result;
}

// script (js)