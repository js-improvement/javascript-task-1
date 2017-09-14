'use strict';
function checkArabicTimeCorrect(arabicTime) {
    if ((arabicTime.length !== 5) ||
        (Number(arabicTime.charAt(0)) * 10 + Number(arabicTime.charAt(1))) > 23 ||
        (Number(arabicTime.charAt(3)) * 10 + Number(arabicTime.charAt(4))) > 59 ||
        (!Number(arabicTime.charAt(2)) === ':')) { // uexpected arabic time value or format
        console.info('wrong time format, you fuckin idiot!');

        return;
    }

    return arabicTime;
}
function decadesTranslateArabicToRoman(arabicTime) {
    var romanTime1 = '';
    if (Number(arabicTime.charAt(0)) === 5) {
        romanTime1 = romanTime1 + 'L';
    } else if (Number(arabicTime.charAt(0)) === 4) {
        romanTime1 = romanTime1 + 'XL';
    } else {
        for (var i = 0; i < Number(arabicTime.charAt(0)); i++) {
            romanTime1 = romanTime1 + 'X';
        }
    }

    return romanTime1;
}
function notDecadesTranslateArabicToRoman(arabicTime) {
    var romanTime2 = '';


    if (Number(arabicTime.charAt(1)) === 9) {
        romanTime2 = romanTime2 + 'IX';
    } else if (Number(arabicTime.charAt(1)) >= 5) {
        romanTime2 = romanTime2 + 'V';
        for (var j = 0; j < Number(arabicTime.charAt(1)) - 5; j++) {
            romanTime2 = romanTime2 + 'I';
        }
    } else if (Number(arabicTime.charAt(1)) === 4) {
        romanTime2 = romanTime2 + 'IV';
    } else {
        for (var k = 0; k < Number(arabicTime.charAt(1)); k++) {
            romanTime2 = romanTime2 + 'I';
        }
    }

    return romanTime2;
}
function newTranslateArabicToRoman(arabicTime) {
    var romanTime3 = '';
    romanTime3 = romanTime3 +
        decadesTranslateArabicToRoman(arabicTime) +
        notDecadesTranslateArabicToRoman(arabicTime);

    return romanTime3;
}


function newCountRomanTime(arabicTime) {
    var romanTime4 = '';
    romanTime4 = romanTime4 + newTranslateArabicToRoman(arabicTime.charAt(0) +
        arabicTime.charAt(1)) +
        ':' + newTranslateArabicToRoman(arabicTime.charAt(3) + arabicTime.charAt(4));
    if (romanTime4 === ':') {
        romanTime4 = 'N:N';
    }

    return romanTime4;

}
function romanTime(arabicTime) {
    return newCountRomanTime(checkArabicTimeCorrect(arabicTime));
}
console.info(romanTime('09:54'));

console.info(romanTime('22:38'));

console.info(romanTime('19:02'));

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
/* function romanTime(time) {
    // Немного авторского кода и замечательной магии
    return time;
}*/

module.exports = romanTime;
