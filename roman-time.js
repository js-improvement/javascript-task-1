'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function convertHHToRoman(timeHH) {
    var timeHHArray = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    timeHH = timeHHArray[timeHH];

    return timeHH;
}

function convertMMToRoman(timeMM) {
    var timeMMArray = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    timeMM = timeMMArray[timeMM];

    return timeMM;
}

function convertRoman(timeHM) {
    if (timeHM === '00') {
        timeHM = 'N';

        return timeHM;
    }

    if (timeHM < 0) {
        throw new TypeError();
    }

    if ((timeHM >= 0) && (timeHM < 10)) {
        timeHM = convertMMToRoman(Number(timeHM.charAt(1)));

        return timeHM;
    }

    var romanTimeHH = convertHHToRoman(Number(timeHM.charAt(0)));
    var romanTimeMM = convertMMToRoman(Number(timeHM.charAt(1)));

    timeHM = romanTimeHH + romanTimeMM;

    return timeHM;
}

function checkUndefined(checkedTime) {
    if (checkedTime === undefined) {
        throw new TypeError();
    }
}

function romanTime(time) {
    // Немного авторского кода и замечательной магии

    checkUndefined(time);

//    if (time === undefined) {
//        throw new TypeError();
//    }

    time = time.split(':', 2);

    for (var i = 0; i < 2; i++) {
        if ((isNaN(time[i])) || (time[i] === '') || (time[0] > 23) || (time[1] > 59)) {
            throw new TypeError();
        }
    }

    time = convertRoman(time[0]) + ':' + convertRoman(time[1]);

    return time;
}

module.exports = romanTime;
