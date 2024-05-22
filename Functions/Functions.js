function add7(number) {
    return 7 + number;
}

console.log(add7(5));

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(3,2))

function captitalize(Str) {
    return Str.charAt(0).toUpperCase() + Str.slice(1);
    
}

console.log(captitalize("HELLO WORLD"));

function lastLetter(String) {
    let lastletter = String.charAt(String.length - 1);
    return lastletter;
}

console.log(lastLetter("abcd"));

function sumOfTripledEvens(array) {
return array
.filter((num) => num % 2 === 0)
.map((num) => num * 3)
.reduce((acc, curr) => acc + curr, 0); // Provide 0 as the initial value
}

console.log(sumOfTripledEvens([1,2,3,4,5])); 

  