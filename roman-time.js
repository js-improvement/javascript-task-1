'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function romanTime(time) {
    var splitData = time.split(':');
    var hours = splitData[0];
    var minutes = splitData[1];
    if (isNaN(hours) || isNaN(minutes) || tryLim(hours, minutes) || !splitData.length === 2) {
        throw new TypeError('!!!ACHTUNG!!! WRONG TIME', 'roman-time.js', 13);
    }

    return renumber(hours) + ':' + renumber(minutes);
}

/*
ПРОВЕРКА ИСКЛЮЧЕНИЙ
*/

function tryLim(hours, minutes) {

    return (hours < 0 || hours > 23 || minutes < 0 || minutes > 59);
}

/*
 *  КОНВЕРТИРУЕТ ДВЕ АРАБСКИЕ ЦИФРЫ В РИМСКИЕ
 *  @param {String} incomingData - часы(минуты) (например, 20)
 *  @returns {String} – часы(минуты) римскими цифрами (XX)
 */
function renumber(incomingData) {
    var firstD = parseInt(incomingData[0], 10);
    var secondD = parseInt(incomingData[1], 10);
    var joinedRoman = '';
    if (firstD === 0) {
        joinedRoman += secondRoman(firstD, secondD);
    } else {
        joinedRoman += firstRoman(firstD) + secondRoman(firstD, secondD);
    }

    return joinedRoman;
}

/*
 *ПРОСТЯЦКИЙ ИТЕРАТОР
 * ДОБАВЛЯЮЩТЙ СУФФЕКС
 * ЛИБО 'X', ЛИБО 'I'
 * ТАМ, ГДЕ НЕОБХОДИМО
 */

function iterIt(itemIt, outputIt, suffix) {
    for (var i = 1; i <= itemIt; i++) {
        outputIt += suffix;
    }

    return outputIt;
}

/*
 *  КОНВЕРТИРУЕТ ПЕРВУЮ ИЗ АРАБСКИХ ЦИФР,
 *  ОБОЗНАЧАЮЩУЮ ДЕСЯТКИ, В РИМСКУЮ.
 *  ЕСЛИ, КОНЕЧНО, ОНА НЕ "0"
 *  @param {String} firstD - цифра (например, 2)
 *  @returns {String} – цифра римская (XX)
 */
function firstRoman(firstD) {
    var firstR = '';
    if (firstD < 3) {
        firstR = iterIt(firstD, firstR, 'X');
    } else if (firstD === 4) {
        firstR += 'XL';
    } else {
        firstR += 'L';
    }

    return firstR;
}

/*
 *  КОНВЕРТИРУЕТ ВТОРУЮ ИЗ АРАБСКИХ ЦИФР,
 *  ОБОЗНАЧАЮЩУЮ ЕДИНИЦЫ, В РИМСКУЮ.
 *  ЕСЛИ, КОНЕЧНО, ОНА НЕ "0"
 *  @param {String} firstD, secondD - (например, 2)
 *  @returns {String} – цифра римская (II)
 */
function secondRoman(firstD, secondD) {
    var secondR = '';
    if (secondD === 0 && firstD === 0) {
        secondR += 'N';
    } else if (secondD <= 3) {
        secondR = iterIt(secondD, secondR, 'I');
    } else if (secondD === 4) {
        secondR += 'IV';
    } else if (secondD >= 5 && secondD <= 8) {
        secondR += 'V';
        secondR += iterIt(secondD, secondR, 'I');
    } else {
        secondR += 'IX';
    }

    return secondR;
}

module.exports = romanTime;
