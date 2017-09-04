'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии


    var t = String(time).split(':');
    //  console.info(t);
    var hour = Number(t[0]);
    var min = Number(t[1]);


    if (hour < 0 || hour > 23 || min < 0 || min > 59 || t.length > 2 || isNaN(hour) || isNaN(min)) {
        return new TypeError('Неверный формат времени');
    }
    var hourR = toRoman(hour);
    var minR = toRoman(min);

    return hourR + ':' + minR;
}


function toRoman(num) {
    var numR = 'N';

    //  console.info(num);

    switch (num) {
        case 0 :
            numR = 'N';
            break;
        case 1 :
            numR = 'I';
            break;
        case 2 :
            numR = 'II';
            break;
        case 3 :
            numR = 'III';
            break;
        case 4 :
            numR = 'IV';
            break;
        case 5 :
            numR = 'V';
            break;
        case 6 :
            numR = 'VI';
            break;
        case 7 :
            numR = 'VII';
            break;
        case 8 :
            numR = 'VIII';
            break;
        case 9 :
            numR = 'IX';
            break;
        case 10 :
            numR = 'X';
            break;
        case 11 :
            numR = 'XI';
            break;
        case 12 :
            numR = 'XII';
            break;
        case 13 :
            numR = 'XIII';
            break;
        case 14 :
            numR = 'XIV';
            break;
        case 15 :
            numR = 'XV';
            break;
        case 16 :
            numR = 'XVI';
            break;
        case 17 :
            numR = 'XVII';
            break;
        case 18 :
            numR = 'XVIII';
            break;
        case 19 :
            numR = 'XIX';
            break;
        case 20 :
            numR = 'XX';
            break;
        case 21 :
            numR = 'XXI';
            break;
        case 22 :
            numR = 'XXII';
            break;
        case 23 :
            numR = 'XXIII';
            break;
        case 24 :
            numR = 'XXIV';
            break;
        case 25 :
            numR = 'XXV';
            break;
        case 26 :
            numR = 'XXVI';
            break;
        case 27 :
            numR = 'XXVII';
            break;
        case 28 :
            numR = 'XXVIII';
            break;
        case 29 :
            numR = 'XXIX';
            break;
        case 30 :
            numR = 'XXX';
            break;
        case 31 :
            numR = 'XXXI';
            break;
        case 32 :
            numR = 'XXXII';
            break;
        case 33 :
            numR = 'XXXIII';
            break;
        case 34 :
            numR = 'XXXIV';
            break;
        case 35 :
            numR = 'XXXV';
            break;
        case 36 :
            numR = 'XXXVI';
            break;
        case 37 :
            numR = 'XXXVII';
            break;
        case 38 :
            numR = 'XXXVIII';
            break;
        case 39 :
            numR = 'XXXIX';
            break;
        case 40 :
            numR = 'XL';
            break;
        case 41 :
            numR = 'XLI';
            break;
        case 42 :
            numR = 'XLII';
            break;
        case 43 :
            numR = 'XLIII';
            break;
        case 44 :
            numR = 'XLIV';
            break;
        case 45 :
            numR = 'XLV';
            break;
        case 46 :
            numR = 'XLVI';
            break;
        case 47 :
            numR = 'XLVII';
            break;
        case 48 :
            numR = 'XLVIII';
            break;
        case 49 :
            numR = 'XLIX';
            break;
        case 50 :
            numR = 'L';
            break;
        case 51 :
            numR = 'LI';
            break;
        case 52 :
            numR = 'LII';
            break;
        case 53 :
            numR = 'LIII';
            break;
        case 54 :
            numR = 'LIV';
            break;
        case 55 :
            numR = 'LV';
            break;
        case 56 :
            numR = 'LVI';
            break;
        case 57 :
            numR = 'LVII';
            break;
        case 58 :
            numR = 'LVIII';
            break;
        case 59 :
            numR = 'LIX';
            break;
        default:
            numR = 'N';

    }

    return numR;
}

module.exports = romanTime;

