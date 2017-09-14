'use strict';
/*var romanTime = require('./roman-time');*/
function checkArabicTimeCorrect (arabicTime){
    if (arabicTime.length!=5) {
        console.info('wrong time format, you fuckin idiot!');
        return;
    }
    // noinspection JSAnnotator
    if ((+arabicTime.charAt(0) * 10 + +arabicTime.charAt(1)) < 0 ||
        (+arabicTime.charAt(0) * 10 + +arabicTime.charAt(1)) > 23 ||
        (+arabicTime.charAt(3) * 10 + +arabicTime.charAt(4)) < 0 ||
        (+arabicTime.charAt(3) * 10 + +arabicTime.charAt(4)) > 59 ||
        !(arabicTime.charAt(2) == ':')) { //uexpected arabic time value or format
        console.info('wrong time format, you fuckin idiot!');
        return;
    }
    return arabicTime;
}
function newTranslateArabicToRoman(arabicTime){
    var romanTime = '';
    if (Number(arabicTime.charAt(0))===5) romanTime = romanTime + "L";

    else if (Number(arabicTime.charAt(0))===4)
        romanTime = romanTime + "XL";

    else {for (var i=0;i<Number(arabicTime.charAt(0));i++) romanTime = romanTime + "X";}
    if (Number(arabicTime.charAt(1)) === 9) romanTime = romanTime + "IX";


    else if (Number(arabicTime.charAt(1))>=5){
        romanTime = romanTime + "V";
        for(var j=0;j<Number(arabicTime.charAt(1))-5;j++) romanTime = romanTime + "I";
    }
    else if (Number(arabicTime.charAt(1))===4){
        romanTime = romanTime + "IV";
    }
    else for (var k=0;k<Number(arabicTime.charAt(1));k++) romanTime = romanTime + "I";
    return romanTime;
}




function newCountRomanTime (arabicTime){
    var romanTime = '';
    romanTime = romanTime + newTranslateArabicToRoman(arabicTime.charAt(0) + arabicTime.charAt(1))+
        ':'+newTranslateArabicToRoman(arabicTime.charAt(3) + arabicTime.charAt(4));
    return romanTime;
}
function romanTime(arabicTime){
    return newCountRomanTime(checkArabicTimeCorrect(arabicTime));
}
console.info(romanTime('09:54'));

console.info(romanTime('22:38'));

console.info(romanTime('19:02'));


