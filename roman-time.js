'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

/* eslint no-bitwise: ["error", { "int32Hint": true }] */
function romanTime(time) {
    // Немного авторского кода и замечательной магии

    var stime = String(time);
    var t = stime.split(':');
    var hour = Number(t[0]);
    var min = Number(t[1]);
    if (checkLimit(min, hour) && checkNaN(min, hour) && t.length === 2) {
        return convert(hour) + ':' + convert(min);
    }


    // if (checkLimit(min, hour) && checkNaN(min, hour) && t.length === 2) {
    //     return toRoman(hour) + ':' + toRoman(min);
    // }

    throw new TypeError('Неверное время', 'roman-time.js', 10);
}

function checkNaN(min, hour) {
    return (!(isNaN(hour) || isNaN(min)));
}

function checkLimit(min, hour) {
    return (!(hour < 0 || hour > 23 || min < 0 || min > 59));
}

function convert(num) {
    var dec = [50, 10, 5, 1];
    var a;
    var numR = '';
    var i = 0;
    var r = '';
    if (num === 0) {
        return 'N';
    }
    for (i = 0; i < dec.length; i++) {
        a = (num / dec[i] | 0);
        if (a !== 0) {
            r = toRomanLang(i);
            numR = numR + toRoman2(a, r);
        }
        num = num - a * dec[i];
        //  console.info(num + 'test' + numR);
    }


    return validate(numR);
}

function validate(numR) {
    numR = numR.replace('XXXX', 'XL');
    numR = numR.replace('VIIII', 'IX');
    numR = numR.replace('IIII', 'IV');

    return numR;

}

function toRoman2(a, r) {
    var numR = '';
    for (var i = 0; i < a; i++) {
        numR = numR + r;
    }

    return numR;
}

function toRomanLang(i) {
    var r = '';
    if (i === 0) {
        r = 'L';
    } else if (i === 1) {
        r = 'X';
    } else if (i === 2) {
        r = 'V';
    } else if (i === 3) {
        r = 'I';
    }
    //  console.info('test' + numR);

    return r;
}

module.exports = romanTime;

