'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

 // проверка регулярным выражением
    var re = /^(([0,1][0-9])|(2[0-3])):[0-5][0-9]$/;

    if (re.test(time) === true) {

        var arabHours = Number(time.slice(0, 2)); // берём часы и делаем их числом
        var arabMinutes = Number(time.slice(3)); // береём минуты и делаем их числом

        return searchExceptions(toRoman(arabHours)) +
                ':' + searchExceptions(toRoman(arabMinutes));
    }
    throw (new TypeError('The message'));

}

function toRoman(time) {

    var romanTimeMas = []; // массив для записи римских цифр

    // записываем в массив с минутами L столько раз, сколько пятидесяток
    var i;

    for (i = 1; i <= Math.floor(time / 50); i++) {
        romanTimeMas.push('L');
    }

   // записываем в массив X столько раз, сколько десятков
    for (i = 1; i <= Math.floor(time % 50 / 10); i++) {
        romanTimeMas.push('X');
    }

    // записываем в массив V столько раз, сколько пятёрок
    for (i = 1; i <= Math.floor(time % 50 % 10 / 5); i++) {
        romanTimeMas.push('V');
    }

 // записываем в массив I столько раз, сколько единиц
    for (i = 1; i <= Math.floor(time % 50 % 10 % 5); i++) {
        romanTimeMas.push('I');
    }

    time = romanTimeMas.join('');

    return time;
}
function searchExceptions(time) {

    time = time.replace('XXXX', 'XL');
    time = time.replace('VIIII', 'IX');
    time = time.replace('IIII', 'IV');

    if (time === '') {
        time = 'N';
    }

    return time;
}
module.exports = romanTime;
