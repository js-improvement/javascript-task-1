/* eslint-disable no-trailing-spaces */
'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function deca (data) {
    var decaD = parseInt(data);
    var romanD = '';
    var deca = decaD % 10;
    var remind = decaD - deca * 10;
    if (decaD == 0) {
        romanD = romanD + 'N';
        return (romanD);
    } else {
        if (remind == 0) {
            for (var i = deca; i > 0; i--) {
                romanD = romanD + 'X';
            }
            return (romanD);
        } else {
            for (var i = deca; i > 0; i--) {
                romanD = romanD + 'X';
            }
            if (remind > 0 && remind <= 3) {
                for (var i = deca * 10, i <= decaD, i++) {
                    romanD = romanD + 'I';
                }
                return (romanD);
            } else if (remind == 4) {
                romanD = romanD + 'IV';
                return (romanD);
            } else if (remind == 5) {
                romanD = romanD + 'V';
                return (romanD);
            } else if (remind >=5 && remind <=8) {
                romanD = romanD +'V';
                for (var i = deca *10 + 5, i <= decaD, i++) {
                    romanD + 'I';
                }
                return (romanD);
            } else {
                romanD = romanD + 'IX';
                return (romanD);
            }
        }
    }
}

function romanTime(time) {
    var splitData = time.split(':');
    var hours = splitData[0];
    var minutes = splitData[1];
    return deca(hours) + ':' + deca(minutes);
}

module.exports = romanTime;
