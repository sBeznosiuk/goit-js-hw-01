const countryInput = prompt('Страны');
const country = countryInput.toUpperCase();
let cost;
let message;

if (countryInput === null) {
    
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
         
         case null:
             
             message = 'В вашей стране доставка не доступна';
             console.log(message)
             break;
     
        default:
             message = 'Отменено пользователем!';
             console.log(message);
    }
}

alert(message);