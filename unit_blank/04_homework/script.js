// "id": 524901,Москва
// "id": 487846,Ставрополь
// "id": 519336,Великий Новгород
// "id": 491422,Сочи
// "id": 542420,Краснодар
'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const arrayCity = [[524901,'Москва'],[487846,'Ставрополь'],[519336,'Великий Новгород'],
    [491422,'Сочи'],[542420,'Краснодар']];
    let cityItems = document.querySelectorAll('.city_item'),
        tabs = document.querySelector('.city'),
        weather = document.querySelector('.window_weather');

    function showTextCity () {
        let out = [];
        for (let key in arrayCity) {
            out[out.length] = arrayCity[key][1];
        }
        cityItems.forEach((item, i) => {
            item.textContent += out[i];
        });
    }
    showTextCity ();

    function showCity (index) {
        return arrayCity[index][0];
    }
    function showWeather () {
        weather.style.cssText = 'display: block';
    }

    tabs.addEventListener('click', (e) => {
        let target = e.target;
        if (target && target.classList.contains('city_item')) {
            cityItems.forEach((item, i) => {
                if (item == target) {
                    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${showCity(i)}&appid=2de6b46bfdab3c35a87747580694f556`)
                    .then(function (resp) { return resp.json() })
                    .then(function (data) {
                        // console.log(data);
                        document.querySelector('.package-name').textContent = data.name;
                        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
                        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
                        //https://openweathermap.org/img/wn/02d@2x.png
                        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
                    })
                    .catch(function () {
                        // catch any errors
                    });
                    showWeather ();
                }
            });
        }
    });
});


