'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function convertToRoman(decimalTime) {
	var romanTimeTens = decimalTime.slice(0, 1);
	var romanTimeUnits = decimalTime.slice(-1);
	
	switch (romanTimeTens) {
		case '0':
			romanTimeTens = '';
			break;
		case '1':
			romanTimeTens = 'X';
			break;
		case '2':
			romanTimeTens = 'XX';
			break;
		case '3':
			romanTimeTens = 'XXX';
			break;
		case '4':
			romanTimeTens = 'XL';
			break;
		case '5':
			romanTimeTens = 'L';
			break;
	}
		
	switch (romanTimeUnits) {
		case '0':
			romanTimeUnits = 'N';
			break;
		case '1':
			romanTimeUnits = 'I';
			break;
		case '2':
			romanTimeUnits = 'II';
			break;
		case '3':
			romanTimeUnits = 'III';
			break;
		case '4':
			romanTimeUnits = 'IV';
			break;
		case '5':
			romanTimeUnits = 'V';
			break;
		case '6':
			romanTimeUnits = 'VI';
			break;
		case '7':
			romanTimeUnits = 'VII';
			break;
		case '8':
			romanTimeUnits = 'VIII';
			break;
		case '9':
			romanTimeUnits = 'IX';
			break;
	}
	
	if(decimalTime < 10) {
		return decimalTime = romanTimeUnits;
	}
	
	return decimalTime = romanTimeTens + romanTimeUnits;
}

function romanTime(time) {
    // Немного авторского кода и замечательной магии
	var defaultValue = time;
	if (time == undefined ) {
		return TypeError;
	}
	var time = time.split(':', 2);
	
	if ((time[0] > 23) || (time[1] > 59)) {
		return TypeError;
	}
	
	for (var i=0 ; i < 2; i++) {
		if ((time[i] < 0 ) || isNaN(time[i]) || time[i] == '') {
			return TypeError;
		}
	}
	
	time = defaultValue + ' - ' + convertToRoman(time[0]) + ':' + convertToRoman(time[1]);
	
    return time;
}

module.exports = romanTime;
