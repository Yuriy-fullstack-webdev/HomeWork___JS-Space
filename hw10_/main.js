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
Реалізувати функцію, яка повертає різницю між лайками та дизлайками. У якості параметра функція має приймати об'єкт
Приклад об'єкта: 
{
  likes: 10, 
  dislikes: 7
}
*/

let obj = {
  likes: 10,
  dislikes: 7,
};

function subtraction(obj) {
  sub = obj.likes - obj.dislikes;
  return sub;
}
console.log(subtraction(obj));

/* --- 02 --- 
Напишіть функцію, що перетворюватиме об'єкт з данними на рядок.
Рядок повинен мати такий формат: 
'A has a population of B and is located in C' (де A — назва міста, B — населення, а C — країна, в якій розташоване місто).

Приклад виклику функції:

getCityFacts({
  name: 'Kyiv',
  population: '2,884,526',
  country: 'Ukraine'
}) 
// 'Kyiv has a population of 2,884,526 and is located in Ukraine'

*/
function getCityFacts(obj) {
  let a = obj.name;
  let b = obj.population;
  let c = obj.country;
  let text = `${a} has a population of ${b} and is located in ${c}`;
  return text;
}

console.log(
  getCityFacts({
    name: "Kyiv",
    population: "2,884,526",
    country: "Ukraine",
  })
);

/* --- 03 ---
Задача 'Стратегія 50-30-20'

Стратегія 50-30-20 – це простий спосіб складання бюджету, 
який передбачає витрачання 50% прибутку на першочергові потреби, 
30% доходу на бажане та 
20% доходу на заощадження або погашення боргів.

Реалізувати функцію, яка повертатиме об'єкт, 
що складається з трьох ключів: потреби (needs), 
бажане (wants) та заощадження (savings). 
Значення для ключів розподіляються відповідно 
до відсотків стратегії (50-30-20) із загальної суми, 
яку приймає функція у якості параметра.

Приклад виклику функції:

getBudget(10000) // {
  needs: 5000,
  savings: 2000 
  wants: 3000, 
}

*/

function getBudget(cesh) {
  let persent = cesh / 100;
  let obj = {
    needs: 50 * persent,
    savings: 20 * persent,
    wants: 30 * persent,
  };
  return obj;
}

console.log(getBudget(10000));

/* --- 04 ---
Ви працюєте на виробника, і вас попросили підрахувати загальний прибуток від продажу продукту.
Вам надається об’єкт, що містить собівартість за одиницю (у доларах),
ціну продажу за одиницю (у доларах) і початковий інвентар(кількість). 
Поверніть загальний отриманий прибуток, округлений до найближчого долара.

Приклад виклику функції:

showProfit({
  costPrice: 32.67,
  sellPrice: 45.00,
  inventory: 1200
}) 
// 14796
Прибуток = Загальні продажі - Загальні витрати
*/

function showProfit(obj) {
  let profits = obj.sellPrice - obj.costPrice;
  let total = profits * obj.inventory;
  return Math.round(total);
}

console.log(
  showProfit({
    costPrice: 32.67,
    sellPrice: 45.0,
    inventory: 1200,
  })
);

/* --- 05 ---
Створіть функцію, що приймає об’єкт - інформацію про людину.
Функція має повертати рядок 'У вас є знижка на проїзд - 50%',
якщо людина - студент віком до 23 років,
в іншому випадку повертаємо рядок 'На жаль, у вас не має пільг на проїзд'.
Наприклад: 
{
  name: 'Сергій', 
  age: '18', 
  job: 'student'
}
*/

function sale(obj) {
  let age = Number(obj.age);
  let info;
  if ((age < 23) & (obj.job === "student")) {
    info = `${obj.name} у вас є знижка на проїзд - 50%`;
  } else {
    info = "На жаль, у вас не має пільг на проїзд";
  }
  return info;
}

console.log(
  sale({
    name: "Сергій",
    age: "18",
    job: "student",
  })
);

/* --- 06 ---
Напишіть функцію, яка приймає масив об'єктів, 
в кожному з яких є властивість name та age, 
та повертає новий масив, який містить тільки імена людей, 
які мають менше 22 років.
Об'єкт для прикладу:
const arr = [
  {
    name: 'Петро',
    age: 21,
  },
  {
    name: 'Михайло',
    age: 24,
  },
  {
    name: 'Оксана',
    age: 19,
  },
  {
    name: 'Степан',
    age: 42,
  },
  {
    name: 'Наталя',
    age: 16,
  },
    
  ]
*/

let arr = [
  {
    name: "Петро",
    age: 21,
  },
  {
    name: "Михайло",
    age: 24,
  },
  {
    name: "Оксана",
    age: 19,
  },
  {
    name: "Степан",
    age: 42,
  },
  {
    name: "Наталя",
    age: 16,
  },
];

function name22(arr) {
  let name = [];
  for (const iterator of arr) {
    if (Number(iterator.age) < 22) name.push(iterator.name);
  }
  return name;
}

console.log(name22(arr));

/* --- 07 ---
Написати функцію, що отримує масив з об'єктами у якості параметра, 
має повертати масив рядків виду: 
1 - ключ: значення ключа, ключ: значення ключа і т.д. 
Тобто пишемо порядковий номер, починаючи з одиниці, 
потім послідовно усі пари ключі-значення через кому


Масив з об'єктами для прикладу:
const arr = [
  {
    name: 'Петро',
    age: 21,
  },
  {
    name: 'Михайло',
    age: 24,
  },
  {
    name: 'Оксана',
    age: 19,
  },
  {
    name: 'Степан',
    age: 42,
  },
  {
    name: 'Наталя',
    age: 16,
  },
    
  ]
*/
const arr1 = [
  {
    name: "Петро",
    age: 21,
  },
  {
    name: "Михайло",
    age: 24,
  },
  {
    name: "Оксана",
    age: 19,
  },
  {
    name: "Степан",
    age: 42,
  },
  {
    name: "Наталя",
    age: 16,
  },
];

function stringLineArr(arr1) {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    const number = i + 1;
    const stringline = `${number} - name:${arr1[i].name}, age:${arr1[i].age}`;
    arr.push(stringline);
  }
  return arr;
}
console.log(stringLineArr(arr1));

/* --- 08 ---
Напишіть функцію, яка приймає рядок та повертає об'єкт, де ключами є слова з рядка,
а значеннями - кількість літер відповідного слова. 
Варто додати кілька перевірок:
- ключі мають бути у нижньому регістрі
- ключі не мають містити знаків '-'(дефіс) та ','(кома), а також зайвих пробілів
- ключі не мають бути порожніми рядками

Рядок для прикладу

'Richard, Of York Gave - Battle   In Vain, Again - '
Можна скористатися методоми split() та replaceAll()
*/
let line = "Richard, Of York Gave - Battle   In Vain, Again - ";
let arrstr = [",", "-"];
for (const i of arrstr) {
  line = line.replaceAll(i, "");
}
let arrline = line.split(" ");
for (let i = 0; i < arrline.length; i++) {
  if (arrline[i] !== "") {
    console.log(stringLineReplac(arrline[i]));
  }
}

function stringLineReplac(line) {
  let obj = {};
  const key = line.toLowerCase();
  const value = line.length;
  obj[key] = value;
  return obj;
}

/* --- 09 --- 
  Напишіть функцію, яка приймає об'єкт і повертає новий об'єкт, 
  де ключі - значення оригінального об'єкту, 
  а значення - ключі оригінального об'єкту.
  Об'єкт для прикладу 
  { 
    name: 'John', 
    age: 30, 
    gender: 'male' 
  }
 */

const objoriginal = {
  name: "John",
  age: 30,
  gender: "male",
};

function originalNot(obj) {
  let nub = Object.keys(obj).length;
  let arr = Object.entries(obj);
  let newobj = {};
  for (let i = 0; i < nub; i++) {
    const key = String(arr[i][1]);
    const value = String(arr[i][0]);
    newobj[key] = value;
  }
  return newobj;
}
console.log(originalNot(objoriginal));

/* --- 10 --- 
  Напишіть функцію, яка приймає об'єкт з результатами спортсменів та
  повертає загальну кількість очок. Кожен спортсмен має свій об'єкт зі своїми результатами,
  які зберігаються у вигляді масиву. Загальна кількість очок розраховується 
  як сума всіх результатів усіх спортсменів.

  Приклад об'єкту
  {
    'Сергій': [5, 8, 4, 9],
    'Олександр': [9, 7, 6, 8],
    'Василина': [7, 9, 8, 5]
  }
  */
const objback = {
  Сергій: [5, 8, 4, 9],
  Олександр: [9, 7, 6, 8],
  Василина: [7, 9, 8, 5],
};

function comeBack(obj) {
  let nub = Object.keys(obj).length;
  let arrkey = Object.keys(obj);
  let result = 0;
  for (let i = 0; i < nub; i++) {
    const value = Object.values(obj[arrkey[i]]);
    for (const j of value ) {
      result += Number(j);
    }
  }
  return result;
}

console.log(comeBack(objback));
