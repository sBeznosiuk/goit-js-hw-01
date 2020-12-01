const auth = prompt('Пароль')
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
console.log(auth)

if (auth === null) {
    message = 'Отменено пользователем!';
    console.log(message);
} else if (auth === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    console.log(message);
} else {
    message = 'Доступ запрещен, неверный пароль!';
    console.log(message);
}

alert(message);