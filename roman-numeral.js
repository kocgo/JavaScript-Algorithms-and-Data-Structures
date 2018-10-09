// CONVERTS GIVEN NUMBER TO ROMAN NUMERALS

function convertToRoman(num) {
    var decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var roman =   ['M' , 'CM' , 'D' ,'CD','C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    var result = '';

    // FIND THE BIGGEST NUMERAL AND START SUBRACTING FROM NUMBER
    // ADDS A ROMAN NUMERAL TO "RESULT" STRING PER SUBSTRACTION
    for ( var i=0; i < decimal.length; i++){
        while(decimal[i] <= num){
            result += roman[i]
            num -= decimal[i]
        }
    }

    return result
}
   
console.log(convertToRoman(36));
