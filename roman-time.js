'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

 // проверка регулярным выражением

    var arabHours = Number(time.slice(0, 2)); // берём часы и делаем их числом
    var arabMinutes = Number(time.slice(3, 5)); // береём минуты и делаем их числом

    return searchExceptions(toRoman(arabHours)) + ':' + searchExceptions(toRoman(arabMinutes));
    // return toRoman(arabMinutes);
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

    // проверяем на исключения: XXXX, IIII и VIIII
    var subStrXXXX = time.indexOf('XXXX');
    var subStrVIIII = time.indexOf('VIIII');
    var subStrIIII = time.indexOf('IIII');


    if (subStrXXXX !== -1) {
        time = time.substring(0, subStrXXXX) + 'XL' +
             time.substring(subStrXXXX + 4, time.length);
    }


    if (subStrVIIII !== -1) {
        time = time.substring(0, subStrVIIII) + 'IX' +
            time.substring(subStrVIIII + 5, time.length);

    }

    if (subStrIIII !== -1) {
        time = time.substring(0, subStrIIII) + 'IV' +
                 time.substring(subStrIIII + 4, time.length);
    }


    if (time === '') {
        time = 'N';
    }

    return time;
}
module.exports = romanTime;
