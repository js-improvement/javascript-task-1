'use strict';

var romanTime = require('./roman-time');

// Выведет 'IX:X'
console.info(romanTime('09:11'));

// Выведет 'N:N'
console.info(romanTime('00:01'));

// Выведет 'XXIII:LIVIII'
console.info(romanTime('23:58'));

// Выбросится ошибка [TypeError: Неверное время]
console.info(romanTime('24:01'));
