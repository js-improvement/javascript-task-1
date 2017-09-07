'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (isValid(time) === false) {
        throw new TypeError();
    }

    var hours = time.split(':')[0];
    var minutes = time.split(':')[1];

    var romanHours = toRoman(hours);
    var romanMinutes = toRoman(minutes);

    return romanHours + ':' + romanMinutes;
}

function isValid(time) {
    if (typeof time === 'string' && time.length === 5 && time.charAt(2) === ':') {

        var hours = Number(time.slice(0, 2));
        var minutes = Number(time.slice(3, 5));

        if (!isNaN(hours) && !isNaN(minutes) &&
            hours >= 0 && hours <= 23 &&
            minutes >= 0 && minutes <= 59) {
            return true;
        }
    }

    return false;
}

function toRoman(number) {
    if (number === '00') {
        return 'N';
    }

    var romanDictTens = { '0': '', '1': 'X', '2': 'XX', '3': 'XXX', '4': 'XL', '5': 'L' };
    var romanDictOnes = { '0': '', '1': 'I', '2': 'II', '3': 'III', '4': 'IV',
                          '5': 'V', '6': 'VI', '7': 'VII', '8': 'VIII', '9': 'IX' };

    var digits = number.split('');

    return romanDictTens[digits[0]] + romanDictOnes[digits[1]];
}

module.exports = romanTime;
