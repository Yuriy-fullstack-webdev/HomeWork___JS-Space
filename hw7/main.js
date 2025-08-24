/* ---01--- 
Реалізувати функцію, яка прийматиме кількість годин та повертатиме кількість хвилин.
*/
let result;

const convHoursToMinutes = (hours) => hours * 60;
result = convHoursToMinutes(5);
console.log(result);


/* ---02--- 
Реалізувати функцію, яка приймає довжину та ширину та повертає розрахований периметр прямокутника.
*/

const perimeter = (a, b) => (2 * a + 2 * b);
result = perimeter(5, 10);
console.log(result);

/* ---03--- 
Реалізувати функцію, яка конвертує кілометри за годину (км/год) на метри за секунду (м/с)
Функція має повертати рядок типу '50 км/год - це 13.9 м/с'
Оскільки 1 км = 1000 м, 1 година = 3600 с, для переведення кілометрів за годину на метри за секунду необхідно число помножити на 1000 і поділити на 3600.
Формула перекладу: X км/год = X*(1000/3600) м/с
Для округлення можна скористатися методом .toFixed()
*/

const convSpeed = function (speed) {
    let meter = speed * (1000 / 3600);
    let result = `${speed} км/год = ${meter.toFixed(2)} м/с`;
    return result;
}
result = convSpeed(50);
console.log(result);

/* ---04--- 
Реалізувати функцію, яка приймає 3 параметри: операнд, перше число, друге число. Операнд - це один з символів + - * /
Функція має повертати результат отриманого з параметрів виразу. У разі неправильного операнда (якщо замість одного з операндів  + - * /  введено щось інше) функція повертає текст 'Введіть коректний операнд'.
*/
let operationGO;
let operation;
let num1;
let num2;
do {
    operationGO = 0;
    operation = prompt("Математична дія(операнд)    +, -, *, / ");
    if (operation === '-' || operation === '+' || operation === '*' || operation === '/') {operationGO = 1};
    if (operationGO == 0) {
        alert('Введіть коректний операнд');
    }
} while (operationGO === 0);

num1 = +prompt("Число №1:", 0);
do {
    num2 = +prompt("Число №2:", 0);
    if (operation === '/' && num2 === 0) {
        alert('Ділення на "0" заборонено. Введіть коректно число.');
    }
} while (operation === '/' && num2 === 0);

const mathematicalSolution = function (operation, num1, num2) {
    switch (operation) {
        case '-':
            result = num1 - num2
            break;
        case '+':
            result = num1 + num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;

        default:
            break;
    }

    return result;
}
result = mathematicalSolution(operation, num1, num2);
console.log(result);

/* ---05--- 
Реалізувати функцію, яка приймає ім'я у форматі рядка (string).
Функція має повертати текст 'Це жіноче ім'я', якщо остання літера імені - це 'а' або 'я'
або рядок 'Це чоловіче ім'я' в інших випадках
Також врахувати, що деякі чоловічі імена також закінчуються на 'a'. Це імена Микола, Вакула, Кузьма, Лука, Микита.
Не враховуємо жіноче ім'я Любов або інші жіночі, що закінчуються на приголосний.
*/
const imya = function (imya) {
    let gender;
    const man = ["Микола", "Вакула", "Кузьма", "Микита", "Лука", "Нагнибіда", "Рава", "Славута", "Сурма", "Чара", "Ярема"]
    let letter = imya[imya.length - 1];
    if (letter == "ь") {
        gender = "жіноче";
    } else {
        if (letter == "а" || letter == "я") {
            gender = "жіноче";
            for (let i = 0; i < man.length; i++) {
                if (man[i] == imya) {
                    gender = "чоловіче";
                }
            }
        } else {
            gender = "чоловіче"
            if (imya == "Любов") {
                gender = "жіноче";
            };
        }
    }
    result = `${imya} - це ${gender} ім'я`;
    return result
};

result = imya("Микит");
console.log(result);

/* ---06--- 
Створіть функцію, яка приймає два рядки player1 і player2 (які представляють гравців 1 і 2) у якості аргументів та повертає рядок із зазначенням переможця в грі «Камінь, ножиці, папір».

Кожен аргумент міститиме одне зі слів: «Камінь», «Папір» або «Ножиці». Поверніть переможця за такими правилами:


Камінь перемагає ножиці
Ножиці перемагають папір
Папір перемагає камінь
Якщо player1 виграє, поверніть рядок 'Переміг перший гравець'. Якщо player2 виграє, поверніть рядок 'Переміг другий гравець', а якщо player1 і player2 однакові, поверніть 'Нічия'.
*/
let player1 = "Папір";
let player2 = "Камінь";
result = game(player1, player2);
console.log(result);

function game(player1, player2) {
    let result;
    let arr = ["Камінь", "Ножиці", "Папір"];
    let player1rang;
    let player2rang;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == player1) player1rang = i;
        if (arr[i] == player2) player2rang = i;
    }
    let x = player1rang - player2rang;
    switch (Math.abs(x)) {
        case 0:
            result = 'Нічия';
            break;
        case 1:
            if (x === -1) {
                result = 'Переміг перший гравець';
            } else {
                result = 'Переміг другий гравець';
            }
            break;
        case 2:
            if (x === 2) {
                result = 'Переміг перший гравець';
            } else {
                result = 'Переміг другий гравець';
            }
            break;
        default:
            break;
    }
    return result
};

/* ---07--- 
Реалізувати функцію, що перевіряє число, передане у якості аргумента. Якщо число дорівнює нулю або менше нуля, то повертаємо true, якщо більше нуля - false
Реалізувати функцію БЕЗ умовних конструкцій (тобто без if/else, тернарних операторів або switch/case )
Використовуємо оператори порівняння
*/
let params = -1;
result = N (params);
console.log(result);

function N(params) {
    let result = Boolean(params < 1)
    return result;
}

/* ---08--- 
Створіть функцію, яка приймає два аргументи - цілі числа. Повертає true, якщо одне з них дорівнює 10 або якщо їх сума дорівнює 10, в іншому випадку повертає false
Реалізувати функцію БЕЗ умовних конструкцій (тобто без if/else, тернарних операторів або switch/case )
Використовуємо логічні операто
*/

let nn1 = 0;
let nn2 = 10;
result = NN(nn1, nn2);
console.log(result);
function NN(nn1, nn2) {
    let result = (nn1 == 5 || nn2 == 5 || nn1 == 10 || nn2 == 10 || (nn1 + nn2) == 10 || (nn1 - nn2) == 10)
    return result;
}