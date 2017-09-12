'use strict';
/*var romanTime = require('./roman-time');*/
function checkArabicTimeCorrect (arabicTime){
    if (arabicTime.length!=5) {
        console.info('wrong time format, you fuckin idiot!');
        return;
    }
    // noinspection JSAnnotator
    if ((+arabicTime.charAt(0) * 10 + +arabicTime.charAt(1)) < 0 || (+arabicTime.charAt(0) * 10 + +arabicTime.charAt(1)) > 23 || (+arabicTime.charAt(3) * 10 + +arabicTime.charAt(4)) < 0 || (+arabicTime.charAt(3) * 10 + +arabicTime.charAt(4)) > 59 || !(arabicTime.charAt(2) == ':')) { //uexpected arabic time value or format
        console.info('wrong time format, you fuckin idiot!');
        return;
    }
    return arabicTime;
}
function translateArabicToRoman(arabicNumber){
    var romanNumber = '';
    console.info(arabicNumber-arabicNumber%10);
    switch ((arabicNumber-arabicNumber%10)) {
        case 50:
            romanNumber = romanNumber + 'L';
            break;
        case 40:
            romanNumber = romanNumber + 'IL';
            break;
        default:
            var i = (arabicNumber-arabicNumber%10)/10;//number od X'es counting
            while (i > 0) {
                romanNumber = romanNumber + 'X';
                i--;
            }
            break;
    }
    switch (arabicNumber%10){
        case 9:
            romanNumber = romanNumber + 'IX';
            break;
        case 8:
        case 7:
        case 6:
        case 5:
            romanNumber = romanNumber + 'V';
            var j = arabicNumber % 5; //number od I'es counting
            while (j > 0) {
                romanNumber = romanNumber + 'I';
                j--;
            }
            break;
        case 4:
            romanNumber = romanNumber + 'IV';
            break;
        case 3:
        case 2:
        case 1:
            var k = arabicNumber % 5; //number od I'es counting
            while (k > 0) {
                romanNumber = romanNumber + 'I';
                k--;
            }
            break;
    }
    return romanNumber;
}
function countRomanTime (arabicTime){
    var romanTime = '';
    romanTime = romanTime + translateArabicToRoman(+arabicTime.charAt(0) * 10 + +arabicTime.charAt(1))+':'+translateArabicToRoman(+arabicTime.charAt(3) * 10 + +arabicTime.charAt(4));
    return romanTime;
}
function romanTime(arabicTime){
    return countRomanTime(checkArabicTimeCorrect(arabicTime));
}
console.info(romanTime('09:54'));
console.info(romanTime('22:38'));
console.info(romanTime('19:02'));

