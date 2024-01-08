// console.log('Hello world');

// // null, 0, underfined, false, "(порожній рядок)", NaN - виводять false
// // Перевірте чи парні числа 15, 20, 45, 30.
// const isEven = 15 % 2 === 0;
// console.log(isEven);

// // Дано 90 хвилин, перевірте скільки в даному числі міститься годин і хвилин.
// // Результат виведіть у консоль.
// // 70 === 01:10
// // 90 === 01:30
// const time = 90;
// const hours = Math.floor(time / 60);
// const updateHours = (hours + "").padStart(2, "0");

// const minutes = time % 60;
// const updateMinutes = (minutes + "").padStart(2, "0");
// console.log(`${updateHours}:${updateMinutes}`);

// const userName = "Put your name!"
// // // // Потрібно перевірити чи всі літери заголовні в даному рядку.

// // // const isUpperCase = userName === userName.toUpperCase();
// // // console.log(isUpperCase);

// const str = "HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++";
// const isExistJs = str.includes('JS');
// console.log(str.indexOf('JS'));