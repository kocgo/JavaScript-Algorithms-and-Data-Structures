// Write a function called sameFrequency.Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)



const sameFrequency = (num1, num2) => {
    let num1String = String(num1);
    let num2String = String(num2);

    if(num1String.length !== num2String.length) return false;

    let countNum1 = {}
    let countNum2 = {}

    for(let i=0; i< num1String.length; i++){
        countNum1[num1String[i]] = (countNum1[num1String[i]] || 0) + 1
    }
    countNum1
    for(let i=0; i< num2String.length; i++){
        countNum2[num2String[i]] = (countNum2[num2String[i]] || 0) + 1
    }
    countNum2

    for(let key in countNum1){
        if(countNum1[key] !== countNum2[key]) return false
    }
    return true
}

console.log(sameFrequency(182,281))

// console.log(sameFrequency(34,14))

// console.log(sameFrequency(22,222))
