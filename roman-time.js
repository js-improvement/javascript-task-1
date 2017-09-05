'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии

    var stime = String(time);
    var t = stime.split(':');
    var hour = Number(t[0]);
    var min = Number(t[1]);
    if (checkLimit(min, hour) && checkNaN(min, hour) && t.length === 2) {
        return toRoman(hour) + ':' + toRoman(min);
    }

    throw new TypeError('Неверное время', 'roman-time.js', 10);
}

function checkNaN(min, hour) {
    return (!(isNaN(hour) || isNaN(min)));
}

function checkLimit(min, hour) {
    return (!(hour < 0 || hour > 23 || min < 0 || min > 59));
}

function toRoman(num) {
    var numR = ['N',
        'I',
        'II',
        'III',
        'IV',
        'V',
        'VI',
        'VII',
        'VIII',
        'IX',
        'X',
        'XI',
        'XII',
        'XIII',
        'XIV',
        'XV',
        'XVI',
        'XVII',
        'XVIII',
        'XIX',
        'XX',
        'XXI',
        'XXII',
        'XXIII',
        'XXIV',
        'XXV',
        'XXVI',
        'XXVII',
        'XXVIII',
        'XXIX',
        'XXX',
        'XXXI',
        'XXXII',
        'XXXIII',
        'XXXIV',
        'XXXV',
        'XXXVI',
        'XXXVII',
        'XXXVIII',
        'XXXIX',
        'XL',
        'XLI',
        'XLII',
        'XLIII',
        'XLIV',
        'XLV',
        'XLVI',
        'XLVII',
        'XLVIII',
        'XLIX',
        'L',
        'LI',
        'LII',
        'LIII',
        'LIV',
        'LV',
        'LVI',
        'LVII',
        'LVIII',
        'LIX'];

    return numR[num];
}

module.exports = romanTime;

