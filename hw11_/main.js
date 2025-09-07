/*Зверніть увагу! 
  Кожна з функції у цьому домашньому завданні має щось повертати. 
  Тож у тілі функції має бути return. 
  Не пишемо console.log у тілі функції. 
  Можна потім викликати функцію в console.log(functionName()), щоб побачити результат.  
*/

/* Вимоги до завдання:
- Код має бути відформатовано (використовуйте Prettier або альтернативні форматувальники)
- Назви змінних та функції мають відповідати загальним правилам неймінгу:
  - назви змінних повинні бути зрозумілими і описувати значення, яке в них зберігається;
  - для функції використовуйте описові імена, зазвичай дієслова в наказовому способі.
Поширеними префіксами є get, make, apply, check тощо...
*/

/* --- 01 --- 
Напишіть функцію, що приймає число і перетворює його на масив, де цифри стоять в протилежному порядку. 
В масиві мають бути саме цифри, а не рядки. 
Число має бути більше нуля

Приклад виклику функції
reverseDigits(3456) // [6, 5, 4, 3]
*/
console.log("--- 01 ---");
const nub1 = 54321;

function reverseDigits(argument) {
  const result = String(argument).split("").reverse().map(Number);
  return result;
}

console.log(reverseDigits(nub1));

/* --- 02 ---
Напишіть функцію, що прийматиме масив чисел та окреме число. 
Функція має повертати масив, де немає значень, що були б більшими за вказане другим параметром число. 
Це має бути той самий масив, що й приймає функці. 
Не створюємо новий масив всередині функції.
Приклад
clearArray([1, 5, 7, 4, 2, 9, 6, 13], 8); // [1, 5, 7, 4, 2, 6]
Для спрощення розв'язання можна використати цикл while
*/
console.log("--- 02 ---");
function clearArray(arr, argument) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < argument) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

console.log(clearArray([1, 5, 7, 4, 2, 9, 6, 13], 8));

/* --- 03 ---
Напишіть функцію, що емулює роботу метода slice(). 
Тобто функція має приймати масив, стартову позицію, та крайню позицію 
Функція повертатиме новий масив, що містить елементи від стартової позиції до фінальної(не включно)
Врахувати, що при виклику:
- може бути передано лише масив та стартова позиція
- може бути передано лише масив
- позиції можуть бути зі знаком мінус
*/

console.log("--- 03 ---");

function sliceEmul(arr, start, end) {
  let arr_length = arr.length;
  let result = [];

  if (end === "undefined" || end >= arr_length) {
    end = arr_length;
  } else if (end < 0) {
    end = end + arr_length;
  } else if (end < arr_length * -1) {
    end = 0;
  }

  if (start === "undefined" || start < arr_length * -1) {
    start = 0;
  } else if (start < 0) {
    start = start + arr_length;
  } else if (start >= arr_length) {
  }

  if (end <= start) {
    result = [];
  } else {
    let j = 0;
    for (let i = start; i < end; i++) {
      result[j] = arr[i];
      j = j + 1;
    }
  }
  return result;
}

console.log(sliceEmul([1, 2, 3, 4, 5, 6, 7, 8, 9], -8, -1));

/* --- 04 ---
Напишіть функцію, що емулює роботу метода concat().
Тобто функція має приймати 2 пераметри, 
перший має бути масивом, інший будь-яким типом даних. 
Функція має повертати новий масив, що містить усі передані елементи.

Врахувати, що якщо другий параметр - масив, 
то його елементи додаються як окремі елементи, 
а не як вкладений масив.

Не використовувати SPREAD-оператор

Для перевірки на масив можна скористатися методом Array.isArray()
*/

console.log("--- 04 ---");
function concatEmul(arr, arg1) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
  }
  if (typeof arg1 !== "object") {
    result.push(arg1);
  } else if (Array.isArray(arg1)) {
    for (const iterator of arg1) {
      result.push(iterator);
    }
  } else {
    result.push(Object.entries(arg1));
  }
  return result;
}

console.log(concatEmul([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));

/* --- 05 ---
Напишіть функцію, яка емулює роботу метода join().
Функція повинна приймати масив та роздільник (рядок), 
який буде використовуватись для об'єднання елементів масиву в одну рядкову послідовність. 
Функція має повертати сформований рядок.
Врахувати, що при виклику розділювач може бути не передано.
*/

console.log("--- 05 ---");
function concatJoin(arr, arg1) {
  let result = "";
  if (arr.length !== 0) {
    if (arg1 === "" || typeof arg1 === "undefined") {
      ifElse(arr, ",");
    } else {
      ifElse(arr, arg1);
    }
  }
  return result;

  function ifElse(arr, str) {
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        result = result + arr[i];
      } else {
        result = result + arr[i] + str;
      }
    }
    return result;
  }
}

console.log(concatJoin([1, 2, 3, 4, 5, 6, 7, 8, 9]));
