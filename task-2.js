const total = 100;
let ordered = 50;

console.log('Заказ оформлен, с вами свяжется менеджер', ordered <= total);
console.log('На складе недостаточно товаров!', ordered > total);

ordered = 20;
console.log('Заказ оформлен, с вами свяжется менеджер', ordered <= total);
console.log('На складе недостаточно товаров!', ordered > total);

ordered = 80;
console.log('Заказ оформлен, с вами свяжется менеджер', ordered <= total);
console.log('На складе недостаточно товаров!', ordered > total);

ordered = 130;
console.log('Заказ оформлен, с вами свяжется менеджер', ordered <= total);
console.log('На складе недостаточно товаров!', ordered > total);

