let quantity = prompt('Дроны');
const credits = 23580;
const pricePerDroid = 3000;
const totalPrice = quantity * pricePerDroid;
let message;

console.log(quantity)

if (quantity === null) {
    message = 'Отменено пользователем!'
    console.log(message)
} else {
    if ((quantity * pricePerDroid) <= credits) {
        message = `Вы купили ${quantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`
        console.log(message)
        console.log(Number(credits - totalPrice))
    } else {
        message = 'Недостаточно средств на счету!';
        console.log(message)
    }
}

alert(message)