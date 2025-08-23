/* ---01--- 
- Маємо рядок 'The orange octopus opened one oyster'
- Напишіть програму, яка поверне в консоль речення, в якому всі літери 'o' будуть замінені на 'a'.
- Використайте цикл, умову та підходящий метод для роботи з рядками.
*/

let str = 'The orange octopus opened one oyster';
let strNew = '';

for (let index = 0; index < str.length; index++) {
    if (str[index] == 'o') {
        strNew += 'a'
    } else {
        strNew += str[index];
    }
}
console.log("Оригінал ", str);
console.log("Подміна  ", strNew);


/* ---02--- 
- Напишіть програму, яка запитує у користувача число і виводить таблицю множення для цього числа.
- Використайте цикл
- Приклад виклику функції для 3:
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30
*/

let q = prompt("Число: ")
console.log(`Таблиця множення на ${q}`);
for (let index = 1; index <= 10; index++) {
    console.log(`${q} x ${index} = `, index * q);
}


/* ---03--- 
- Маємо масив [3, 6, 1, 8, 2, 11, 7, 5]
- Знайдіть суму елементів масиву.
- Знайдіть середнє значення елементів масиву
- Використайте цикл
*/

let arr = [3, 6, 1, 8, 2, 11, 7, 5];
let sum = 0;
let l = arr.length;
for (let index = 0; index < l; index++) {
    sum += arr[index];
}
console.log("Cума елементів масиву = ", sum);
console.log("Середнє значення елементів масиву = ", sum / l);


/* ---04--- 
- Напишіть програму, яка запитує у користувача число і виводить у консоль рядок чисел від 0 до введеного користувачем включно. Для розділення використовуйте пробіл.
- Використайте цикл
- Приклад виклику функції для 4:
0 1 2 3 4
*/

let nn = +prompt("Число для рядка", 0);
let msgnn = '';
for (let i = 0; i <= nn; i++) {
    msgnn += `${i} `
}
console.log(msgnn);

/* ---05--- 
- Маємо масив ["apple", "dog", "book", "amazing", "flower", "house", "ant", "car", "arrow", "grape"]
- Виведіть в консоль усі слова з масиву, які починаються з літери 'a'.
- Використайте цикл та умови
*/

let arr1 = ["apple", "dog", "book", "amazing", "flower", "house", "ant", "car", "arrow", "grape"];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i][0] == 'a') console.log (arr1[i])
}



/* ---06--- 
- Маємо масив ["the", "five", "boxing", "wizards", "jump", "quickly"]
- Зібрати це в речення, перше слово має бути з великої літери
- Використати цикл
*/

let arr2 = ["the", "five", "boxing", "wizards", "jump", "quickly"];
let msg2 = arr2[0][0].toLocaleUpperCase() + arr2[0].slice(1, arr2[0].length);
for (let i = 1; i < arr2.length; i++) {
    msg2 += ` ${arr2[i]}`
}
console.log(msg2);

/* ---07--- 
- Напишіть програму, яка знаходитиме суму всіх чисел, які діляться на 3 або на 5 в межах від 1 до 1000.
- Використайте цикл та умови
*/
let sumq = 0;
for (let i = 0; i <= 1000; i++) {
    if (i % 3 === 0) {
        sumq += i;
    } else if (i % 5 === 0) {
        sumq += i;
    }
}
console.log (sumq);

/* ---08--- 
- Напишіть програму, яка буде розгортати рядок у зворотньому порядку за допомогою циклу.
- Рядок отримуємо через prompt()
- Використайте цикл та умови
*/
let str3 = prompt("Рядок: ");
let st3new = '';
console.log("Було - ", str3);
for (let i = str3.length - 1; i >= 0; i--) {
    st3new += str3[i]
}
console.log("Стало - ", st3new);

/* ---09--- 
- Напишіть програму, яка буде перевіряти, чи слово/речення є паліндромом.
- Паліндром - слово, число, набір символів, словосполучення або віршований рядок, що однаково читається в обох напрямках (зліва направо та справа наліво).
- Використайте цикл та умови
*/

let str4input = prompt("Слово поліндром: ");
let str4toLowerCase = str4input.toLowerCase();
let str4 = '';
let str4bool = true;
for (let i = 0; i < str4toLowerCase.length; i++) {
    if (str4toLowerCase[i] !== " ") {
        str4 += str4toLowerCase[i];
    }
}
for (let i = 0; i < str4.length / 2; i++) {
    if (str4[i] !== str4[str4.length - 1 - i]) str4bool = false;
}
(str4bool) ? console.log(`${str4input} - поліндром`): console.log(`${str4input} - Не поліндром`);

/* ---10--- 
- Напишіть програму, яка підраховує кількість голосних літер в рядку. (Голосні літери - це a, e, i, o, u)
- Рядок отримуйте з prompt()
Для прикладу можна використати:
The quick brown fox jumps over the lazy dog
Elephants never forget their family
Ocean waves crashing on the shore
The sun rises in the east and sets in the west
Використайте цикл та умови
*/

let sum1 = 0;
let str5 = "The quick brown fox jumps over the lazy dog Elephants never forget their family Ocean waves crashing on the shore The sun rises in the east and sets in the west";
let str6 = str5.toLowerCase();
for (let i = 0; i < str5.length; i++) {
    if (str6[i] == "a" || str6[i] == "e" || str6[i] == "i" || str6[i] == "o" || str6[i] == "u") {
        sum1++
    }
}
console.log (sum1);