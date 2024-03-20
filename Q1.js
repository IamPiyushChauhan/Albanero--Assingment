// Q1) Write a function that takes an integer 'x'(greater than 0) as
// input and returns a new integer formed by reversing the digits of 'x' 
// without using any built-in methods for reversal. After reversing the digits, 
// determine whether the resulting number has any prime factors. If it does
// have prime factors, return 'Yes' along with the list of prime factors; 
// otherwise, return 'No'."

function primeFactors(x) {
    let factors = [];
    let divisor = 2;

    while (x >= 2) {
        if (x % divisor === 0) {
            factors.push(divisor);
            x = x / divisor;
        } else {
            divisor++;
        }
    }
    if(factors.length >0){
        return "Yes"
    }else{
        return "NI";
    }
}


function reverse(x){
    let num = x;
    let sum = 0;
    while(num>0){
        const rem = num%10;
        sum = sum*10+rem;
        num = Math.floor(num/10);
    }

    return sum;
}

function primeFactorsOfReversedNum(x){
    return primeFactors(reverse(x))
}

console.log(primeFactorsOfReversedNum(123)); //[ 3, 107 ]
console.log(primeFactorsOfReversedNum(1500));// [ 3, 17 ]
console.log(primeFactorsOfReversedNum(1000));// No
