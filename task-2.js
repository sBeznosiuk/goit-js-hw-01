const total = 100;
let ordered;

function isConfirmed (ordered) {
     if (ordered > total) {
    console.log('На складе недостаточно товаров!')
     } else {
    console.log('Заказ оформлен, с вами свяжется менеджер')
    }
}

ordered = 20;
isConfirmed(ordered);

ordered = 50;
isConfirmed(ordered);

ordered = 80;
isConfirmed(ordered);

ordered = 130;
isConfirmed(ordered);