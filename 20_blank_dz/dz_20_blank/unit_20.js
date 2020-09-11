
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. 
Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(e) {
    document.querySelector('.out-1').textContent = e.key;
    return e.key;
}


document.querySelector('.i-1').onkeypress = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(e) {
    document.querySelector('.out-2').textContent = e.keyCode;
    return e.keyCode;
}

document.querySelector('.i-2').addEventListener('keyup', t2);


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен 
символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(e) {
    let out = document.querySelector('.out-3');
    if (e.keyCode >= 48 && e.keyCode <= 57) {
        out.textContent = 'false';
    } else if (e.keyCode >= 65 && e.keyCode <= 90) {
        out.textContent = 'true';
    }
}

document.querySelector('.i-3').addEventListener('keyup', t3);


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. 
Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(e) {
    document.querySelector('.out-4').textContent += e.key.toLowerCase();
}

document.querySelector('.i-4').addEventListener('keypress', t4);

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все 
вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(e) {
    document.querySelector('.out-5').textContent += e.key.toUpperCase();
}

document.querySelector('.i-5').addEventListener('keypress', t5);

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(e) {
    e.preventDefault(); 
    if (e.keyCode >= 97) {
        document.querySelector('.i-6').value += e.key;
    } 
}

document.querySelector('.i-6').addEventListener('keypress', t6);


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 
случаный символ из массива a7 при каждом вводе символа. */

function t7() {
    const a7 = ['a', 'v', 'g', 'c'];
    let input = document.querySelector('.i-7').value,
    out = '';
    out = input + a7[Math.floor(Math.random() * a7.length)];
    document.querySelector('.out-7').textContent = out;
}

document.querySelector('.i-7').addEventListener('keyup', t7);

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, 
но заменяет i на 1, o на 0, l на 7. */

let out = '';
function t8(e) {

    if (e.key == "i") {
        out += 1;
    }
    if (e.key == "o") {
        out += 0;
    }
    if (e.key == "l") {
        out += 7;
    } else if (e.key != "i" && e.key != "o" && e.key != "l") {
        out += e.key;
      }
    document.querySelector('.out-8').textContent = out;
}

document.querySelector('.i-8').addEventListener('keyup', t8);


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 
количество нажатых клавиш стрелка вниз. */
let a = 0;
function t9(e) {
    if (e.key == "ArrowDown") {
        a++;
    }
    document.querySelector('.out-9').textContent = a;
}

document.querySelector('.i-9').addEventListener('keyup', t9);


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш 
\стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - 
увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
let num = 75;
function t10(e) {
    console.log(e);
    if (e.key == "ArrowRight" || e.key == "ArrowLeft") {
        document.querySelector('[src="img/1.png"]').style.cssText = `width: ${num}px`;
        num += 1;
    }else if (e.key == "ArrowUp" || e.key == "ArrowDown") {
        document.querySelector('[src="img/1.png"]').style.cssText = `height: ${num}px`;
        num += 1;
    }
}

document.querySelector('.i-10').addEventListener('keyup', t10);

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). 
Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. 
При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте 
к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте 
через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. 
Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

function t11() {

}

// ваше событие здесь!!!

