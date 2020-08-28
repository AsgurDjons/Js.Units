// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7,
    b = 9;

console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.
let c = 7,
    d = 9;
// task2 = document.querySelector('.out-2');
// task2.textContent = c / b;

document.querySelector('.out-2').textContent = c / d;

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.
let e = 3,
    f = 5;

document.querySelector('.out-3').textContent = e + f;

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.
let e1 = '3',
    f1 = 5;

document.querySelector('.out-4').textContent = e1 + f1; 
// Происходит склеивание строки и числа ( конкатенация ) чьлбы сложить их как числа нужно добавить строке унарный + 

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.
let e2 = 3,
    f2 = 0;
document.querySelector('.out-5').textContent = e2 / f2;


// document.querySelector('.out-5').textContent = 

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.
let e3 = 3, 
    f3 = 'Hello';

document.querySelector('.out-6').textContent = f3 + e3;

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.
let e4 = 3,
    f4 = 'Hello';

document.querySelector('.out-7').textContent = f3 * e4;

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

function t8() {
    const inputT8 = document.querySelector('[name="task-8"]');
    console.log(inputT8.value);
   
}

document.querySelector('.b-8').onclick = t8;

// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

function t9() {
    const inputT9 = document.querySelector('.i-9');
    document.querySelector('.out-9').textContent = inputT9.value;
    inputT9.value ='';
}

document.querySelector('.b-9').onclick = t9;

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

function t10() {
    const inputT10 = document.querySelector('.i-10');
    document.querySelector('.out-10').textContent = +inputT10.value * 10;
    inputT10.value = '';
}

document.querySelector('.b-10').onclick = t10;

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.

function t11() {
    const inputT11 = document.querySelector('.i-11');   
    document.querySelector('.out-11').textContent = +inputT11.value  + 10;
    inputT11.value = '';
}

document.querySelector('.b-11').onclick = t11;

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

function t12() {
    const inputT121 = document.querySelector('.i-12_1'),
          inputT122 = document.querySelector('.i-12_2');
    document.querySelector('.out-12').textContent = `Hello ${inputT121.value} ${inputT122.value}`;
    inputT121.value = '',
    inputT122.value = '';

}

document.querySelector('.b-12').onclick = t12;

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

function t13() {
    const inputT131 = document.querySelector('.i-13_1'),
          inputT132 = document.querySelector('.i-13_2');
    document.querySelector('.out-13').textContent = +inputT131.value + (+inputT132.value);
    inputT131.value = '',
    inputT132.value = '';
}

document.querySelector('.b-13').onclick = t13;

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.
document.querySelector('.i-14').value = 'Hello';

// document.querySelector('.i-14').value = 

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector('.i-15');
y.style.border = '2px solid red';

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16
const inputT161 = document.querySelector('.i-16-1'),
inputT162 = document.querySelector('.i-16-2');
inputT161.type = 'number';
inputT162.type = 'number';
function t16() {
    document.querySelector('.out-16').textContent = +inputT161.value + (+inputT162.value);
}

document.querySelector('.b-16').onclick = t16;

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

function t17() {
    let inputT17 = document.querySelector('.i-17'),
        t = inputT17.value;
    t = parseInt(t);
    console.log(t);
    document.querySelector('.out-17').textContent = t;
    inputT17.value = '';
}

document.querySelector('.b-17').onclick = t17;

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

function t18() {
    let inputT18 = document.querySelector('.i-18'),
    t = inputT18.value;
t = parseFloat(t);
console.log(t);
document.querySelector('.out-18').textContent = t;
inputT18.value = '';
}

document.querySelector('.b-18').onclick = t18;

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

function t19() {
    let inputT191 = document.querySelector('.i-19-1'),
        inputT192 = document.querySelector('.i-19-2');
document.querySelector('.out-19').textContent = +inputT191.value + (+inputT192.value);
inputT191.value ='';
inputT192.value ='';
}

document.querySelector('.b-19').onclick = t19;

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

function t20() {
    const inputName = document.querySelector('.i-20-1'),
          inputFem = document.querySelector('.i-20-2'),
          inputAge = document.querySelector('.i-20-3'),
          inputProf = document.querySelector('.i-20-4');

          
    document.querySelector('.out-20').textContent = `Уважаемый ${inputName.value}, ${inputFem.value}, ваш возраст ${+inputAge.value} года, по професси вы ${inputProf.value}`;
}

document.querySelector('.b-20').onclick = t20;