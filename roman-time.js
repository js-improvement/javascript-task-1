'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

 // проверка регулярным выражением

// ЧАСЫ
    var arabHours = Number(time.substring(0, 2)); // берём часы и делаем их числом
    var arabMinutes = Number(time.substring(3, 5)); // береём минуты и делаем их числом
    var romanHoursM = []; // массив для записи римских часов
    var numberX = arabHours / 10 ^ 0; // число десятков
    var numberV = arabHours % 10 / 5 ^ 0; // число пятёрок в остатке от деления на 10
    var numberI = (arabHours % 10) % 5; // число единиц в остатке

    // записываем в массив X столько раз, сколько десятков
    var i = 1;
    while (i <= numberX) {
        romanHoursM.push('X');
        i++;
    }

    i = 1;

    // записываем в массив V столько раз, сколько пятёрок
    while (i <= numberV) {
        romanHoursM.push('V');
        i++;
    }

    i = 1;

    // записываем в массив I столько раз, сколько единиц
    while (i <= numberI) {
        romanHoursM.push('I');
        i++;
    }
    var romanHoursStr = romanHoursM.join('');


    // проверяем на исключения: IIII и VIIII
    var subStrVIIII = romanHoursStr.indexOf('VIIII');
    var subStrIIII = romanHoursStr.indexOf('IIII');
    var romanHourFin;
    if (subStrVIIII !== -1) {
        romanHoursStr = romanHoursStr.substring(0, subStrVIIII) + 'IX' +
        romanHoursStr.substring(subStrVIIII + 5, romanHoursStr.length);
        romanHourFin = romanHoursStr;

    } else {

    }
    if (subStrIIII !== -1) {
        romanHoursStr = romanHoursStr.substring(0, subStrIIII) + 'IV' +
        romanHoursStr.substring(subStrIIII + 4, romanHoursStr.length);
        romanHourFin = romanHoursStr;
    } else {
        romanHourFin = romanHoursStr;
    }

    if (romanHourFin === '') {
        romanHourFin = 'N';
    }

// МИНУТЫ


    var romanMinutesM = []; // массив для записи римских минут

    var numberLminutes = arabMinutes / 50 ^ 0; // число пятидесятков

    var numberXminutes = (arabMinutes % 50) / 10 ^ 0; // число десятков

    var numberVminutes = (arabMinutes % 50 % 10) / 5 ^ 0; // число пятёрок в остатке от деления на 10

    var numberIminutes = (arabMinutes % 10) % 5; // число единиц в остатке

    // записываем в массив с минутами L столько раз, сколько пятидесяток

    i = 1;

    while (i <= numberLminutes) {
        romanMinutesM.push('L');
        i++;
    }
    // записываем в массив X столько раз, сколько десятков
    while (i <= numberXminutes) {
        romanMinutesM.push('X');
        i++;
    }

    i = 1;
    // записываем в массив V столько раз, сколько пятёрок
    while (i <= numberVminutes) {
        romanMinutesM.push('V');
        i++;
    }

    i = 1;

    // записываем в массив I столько раз, сколько единиц
    while (i <= numberIminutes) {
        romanMinutesM.push('I');
        i++;
    }

    var romanMinutesStr = romanMinutesM.join('');

    // проверяем на исключения: XXXX, IIII и VIIII
    var subMStrXXXX = romanMinutesStr.indexOf('XXXX');
    var subMStrVIIII = romanMinutesStr.indexOf('VIIII');
    var subMStrIIII = romanMinutesStr.indexOf('IIII');


    if (subMStrXXXX !== -1) {
        romanMinutesStr = romanMinutesStr.substring(0, subMStrXXXX) + 'XL'
        + romanMinutesStr.substring(subMStrXXXX + 4, romanMinutesStr.length);
    }


    if (subMStrVIIII !== -1) {
        romanMinutesStr = romanMinutesStr.substring(0, subMStrVIIII) + 'IX'
        + romanMinutesStr.substring(subMStrVIIII + 5, romanMinutesStr.length);

    } else {
        if (subMStrIIII !== -1) {
            romanMinutesStr = romanMinutesStr.substring(0, subMStrIIII) + 'IV'
            + romanMinutesStr.substring(subMStrIIII + 4, romanMinutesStr.length);
        }
    }


    if (romanMinutesStr === '') {
        romanMinutesStr = 'N';
    }
    var finTime = romanHourFin + ':' + romanMinutesStr;

    return finTime;
}

function toRoman(time) {

}

module.exports = romanTime;
