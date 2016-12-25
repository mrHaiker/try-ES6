'use strict';

function applyForVisa(document, resolve, reject) {
    console.log('Обработка заявки');
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject('В визе отказано');
        }, 2000);
    });
    return promise;
}

function getVisa(visa) {
    console.log('Виза получена');
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return resolve(visa);
        }, 2000);
    });
}

function bookHotel(visa) {
    console.log(visa);
    console.log('Бронируем отель');
    return Promise.resolve(visa);
}
function buyTickets() {
    console.log('Покупаем билеты');
}

applyForVisa({}).then(getVisa).then(bookHotel).then(buyTickets).catch(function (error) {
    return console.log(error);
});