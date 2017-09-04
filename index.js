'use strict';

var romanTime = require('./roman-time');

// Выведет 'IX:X'
console.info(romanTime('09:15'));

// Выведет 'N:N'
console.info(romanTime('00:20'));

// Выведет 'XXIII:LIX'
console.info(romanTime('23:59'));

// Выбросится ошибка [TypeError: Неверное время]
console.info(romanTime('24:00'));
