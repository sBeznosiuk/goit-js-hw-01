let total = 0;

while (true) {
    let input = prompt('Введите число')

    if (input === null) {
        break;
    }

    input = Number(input);

    if (Number.isNaN((input))) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }

    total += Number(input);
} 

alert(`Общая сумма чисел равна ${total}`);