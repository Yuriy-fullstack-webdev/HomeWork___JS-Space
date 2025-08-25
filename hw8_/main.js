/* Зверніть увагу! Кожна з функції у цьому домашньому завданні має щось повертати. Тож у тілі функції має бути return. 
Не пишемо console.log у тілі функції. 
Можна потім викликати функцію в console.log(functionName()), щоб побачити результат.  */

/* Вимоги до завдання:
- Код має бути відформатовано (використовуйте Prettier або альтернативні форматувальники)
- Назви змінних та функції мають відповідати загальним правилам неймінгу:
  - назви змінних повинні бути зрозумілими і описувати значення, яке в них зберігається;
  - для функції використовуйте описові імена, зазвичай дієслова в наказовому способі.
    Поширеними префіксами є get, make, apply, check тощо... */

/*---01---
Напишіть функцію, яка змінює місцями другий та четвертий елемент (за індексами) масиву і повертає виправлений масив. 
Не використовувати методи масивів. 
Для виклику і перевірки функції можна взяти цей масив [2,3,4,5,6,7]
*/
let arr = [2, 3, 4, 5, 6, 7];

console.log("---01---");
console.log("старт -", arr);
change(arr);
console.log("заміна -", arr);

function change(arr) {
  let tempvar = arr[1];
  arr[1] = arr[3];
  arr[3] = tempvar;
  return arr;
}

/*---02---
Напишіть функцію, яка змінює місцями нульовий та останній елемент масиву і повертає виправлений масив. 
Не використовувати методи масивів. Для виклику і перевірки функції можна взяти цей масив [5,1,2,3,4,0]
*/
arr = [5, 1, 2, 3, 4, 0];

console.log("---02---");
console.log("старт -", arr);
changeNL(arr);
console.log("заміна -", arr);

function changeNL(arr) {
  let tempvar = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = tempvar;
  return arr;
}

/*---03---
Напишіть функцію, що перебиратиме масив і отримуватиме з нього парні числа. 
Отримані числа мають додаватися в масив. 
Фунція повертатиме масив з парними числами.
Для перевірки можна використати цей масив [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 77]
*/
arr = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 77];

console.log("---03---");
console.log("старт -", arr);
console.log("заміна -", changePaired(arr));

function changePaired(arr) {
  let arr1 = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] % 2 === 0) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}

/*---04---
Напишіть функцію, що перебиратиме масив і повертатиме найбільше значення з цього масиву.
Для прикладу можна використати масив [12,22,43,87,2,34,77,16]
*/
arr = [12, 22, 43, 87, 2, 34, 77, 16];

console.log("---04---");
console.log("старт -", arr);
console.log("макс -", changeMax(arr));

function changeMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

/*---05---
Напишіть функцію, що приймає число і повертає масив від нуля до цього числа включно.
*/
let nub = 8;

console.log("---05---");
console.log("arr-", changeNub(nub));

function changeNub(nub) {
  let arr = [];
  for (let i = 0; i <= nub; i++) {
    arr[i] = i;
  }
  return arr;
}

/*---06---
Напишіть функцію, яка приймає число та повертає масив із трьох чисел: половина числа, чверть числа та восьма частина числа.
*/
console.log("---06---");
console.log("arr-", changeThird(nub));

function changeThird(nub) {
  let arr = [];
  arr[0] = nub / 2;
  let l = 3;
  for (let i = 1; i < l; i++) {
    arr[i] = arr[i - 1] / 2;
  }
  return arr;
}

/*---07---
Напишіть функцію, яка прийматиме масив з даними різних типів і повертатиме новий масив, де записані типи цих даних
Приклад виклику функції
checkArray([1, 'car', true, []]) // ['number', 'string', 'boolean', 'object']
*/
arr = [1, "car", true, []];

console.log("---07---");
console.log("arr-", checkArray(arr));

function checkArray(arr) {
  let check = [];
  for (const i of arr) {
    check.push(typeof i);
  }
  return check;
}

/*---08---
Напишіть функцію, що перевіряє кожне слово в масиві і повертає масив зі словами, які коротші за 6 символів.
Масив для прикладу ['apple', 'banana', 'pear', 'melon', 'cookie', 'date', 'peanut', 'yogurt']
*/
arr = ["apple", "banana", "pear", "melon", "cookie", "date", "peanut", "yogurt"];

console.log("---08---");
console.log("arr-", changeMax6(arr));

function changeMax6(arr) {
  let max6 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 6) {
      max6.push(arr[i]);
    }
  }
  return max6;
}

/*---09---
Напишіть функцію, що емулює роботу метода push. 
Тобто функція має приймати масив і елемент і повертати масив, в кінець якого буде додано цей елемент.
*/

console.log("---09---");
console.log("arr-", arrPush(arr));

function arrPush(arr) {
  let arrpush = [];
  for (let i = 0; i < arr.length; i++) {
    arrpush[i] = arr[i];
  }
  return arrpush;
}

/*---10---
Напишіть функцію, яка приймає два масиви і повертає новий масив, який складається з елементів першого масиву,
які не зустрічаються в другому масиві.
Приклади масивів для перевірки [1, 2, 3, 4, 5, 7] [1, 2, 5];
*/
let arr1 = [1, 2, 3, 4, 5, 7];
let arr2 = [1, 2, 5];

console.log("---10---");
console.log("arr-", arrNew(arr1, arr2));

function arrNew(arr1, arr2) {
  let arr = [];
    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i])) {
        arr.push(arr1[i]);
      }
    }
  return arr;
}
