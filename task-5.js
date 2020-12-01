const countryInput = prompt();
const country = countryInput.toUpperCase();
let cost;
let message;

if (countryInput === null) {
    message = 'Отменено пользователем!';
    console.log(message);
} else {
     switch (country) {
        case 'КИТАЙ':
            cost = 100;
            message = `Доставка в ${country} будет стоить ${cost} кредитов`;
            console.log(message);
            break;
        
        case 'АВСТРАЛИЯ':
            cost = 170;
            message = `Доставка в ${country} будет стоить ${cost} кредитов`;
            console.log(message);
            break;
        
        case 'ЧИЛИ':
            cost = 250;
            message = `Доставка в ${country} будет стоить ${cost} кредитов`;
            console.log(message);
            break;
        
        case 'ИНДИЯ':
            cost = 80;
            message = `Доставка в ${country} будет стоить ${cost} кредитов`;
            console.log(message);
            break;
        
        case 'ЯМАЙКА':
            cost = 120;
            message = `Доставка в ${country} будет стоить ${cost} кредитов`;
            console.log(message);
            break;
     
        default:
            message = 'В вашей стране доставка не доступна';
            console.log(message)
    }
}

alert(message);