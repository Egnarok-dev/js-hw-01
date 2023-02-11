let mySalary = prompt(`Вирахуй мою заробінтну плату:`);
const bonus = mySalary * 0.15;
const total = mySalary++ + bonus;
const taxes = total * 0.1;
const shop = 190;
const result = total - taxes - shop;
alert(`Ваш залишок: ${result} грн`);
