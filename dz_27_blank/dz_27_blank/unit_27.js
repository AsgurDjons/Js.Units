
// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

function t1() {
    const pr1 = new Promise((resolve) => {
        fetch ('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=1', {
            method: 'GET',
        }).then(data => {
            resolve(data.text());
        });
    });
    const pr2 = new Promise((resolve) => {
        fetch ('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=2&name=Zhenya', {
            method: 'GET',
        }).then(data => {
            resolve(data.text());
        });
    });
    Promise.all([pr1,pr2]).then(data => {
        document.querySelector('.out-1').textContent = data;
    });
}

document.querySelector('.b-1').addEventListener('click', t1);

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

function t2() {
    const pr1 = new Promise((resolve) => {
        fetch ('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=3&num1=10&num2=13', {
            method: 'GET',
        }).then(data => {
            resolve(data.text());
        });
    });
    const pr2 = new Promise((resolve) => {
        fetch ('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=4&num1=10&num2=13', {
            method: 'GET',
        }).then(data => {
            resolve(data.text());
        });
    });
    Promise.all([pr1,pr2]).then(data => {
        document.querySelector('.out-2').textContent = data;
    });
}

document.querySelector('.b-2').addEventListener('click', t2);

// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
    const pr1 = new Promise((resolve) => {
        fetch ('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=5', {
            method: 'GET',
        }).then(data => {
            resolve(data.text());
        });
    });
    const pr2 = new Promise((resolve) => {
        fetch ('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=6&num1=10&num2=13', {
            method: 'GET',
        }).then(data => {
            resolve(data.text());
        });
    });
    Promise.all([pr1,pr2]).then(data => {
        document.querySelector('.out-3').textContent = data;
    });
}

document.querySelector('.b-3').addEventListener('click', t3);


// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
    const p1 = new Promise((resolve) => {
        fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=7', {
            method: 'GET',
        }).then(data => {
            resolve(data.text());
        });
    });
    const p2 = new Promise((resolve) => {
        fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=8', {
            method: 'GET',
        }).then(data => {
            resolve(data.text());
        });
    });

    Promise.all([p1,p2]).then(data => {
        document.querySelector('.out-4').textContent = data;
    });
}

document.querySelector('.b-4').addEventListener('click', t4);

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
    const pr1 = new Promise((resolve) => {
        fetch ('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=1', {
            method: 'POST',
        }).then(data => {
            resolve(data.text());
        });
    });
    const pr2 = new Promise((resolve) => {
        fetch ('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=2&name=Zhenya', {
            method: 'POST',
        }).then(data => {
            resolve(data.text());
        });
    });
    Promise.all([pr1,pr2]).then(data => {
        document.querySelector('.out-5').textContent = data;
    });
}

document.querySelector('.b-5').addEventListener('click', t5);

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
    const pr1 = new Promise((resolve) => {
        fetch ('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=3&num1=10&num2=13', {
            method: 'POST',
        }).then(data => {
            resolve(data.text());
        });
    });
    const pr2 = new Promise((resolve) => {
        fetch ('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=4&num1=10&num2=13', {
            method: 'POST',
        }).then(data => {
            resolve(data.text());
        });
    });
    Promise.all([pr1,pr2]).then(data => {
        document.querySelector('.out-6').textContent = data;
    });
}

document.querySelector('.b-6').addEventListener('click', t6);


// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
    const pr1 = new Promise((resolve) => {
        fetch ('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=5', {
            method: 'POST',
        }).then(data => {
            resolve(data.text());
        });
    });
    const pr2 = new Promise((resolve) => {
        fetch ('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=6&num1=10&num2=13', {
            method: 'POST',
        }).then(data => {
            resolve(data.text());
        });
    });
    Promise.all([pr1,pr2]).then(data => {
        document.querySelector('.out-7').textContent = data;
    });
}

document.querySelector('.b-7').addEventListener('click', t7);


// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {
    const p1 = new Promise((resolve) => {
        fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=7', {
            method: 'POST',
        }).then(data => {
            resolve(data.text());
        });
    });
    const p2 = new Promise((resolve) => {
        fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=8', {
            method: 'POST',
        }).then(data => {
            resolve(data.text());
        });
    });

    Promise.all([p1,p2]).then(data => {
        document.querySelector('.out-8').textContent = data;
    });
}

document.querySelector('.b-8').addEventListener('click', t8);

