// console.log("Welcome to javascript");
// console.log("Namaste");

// console.log(y);

// let x;

// console.log(x);

// let a = 1;

// let b = 2;

// let mul = a * b;

// let str = "MY name is neeraj";
// console.log(str);


// let table = 5;

// console.log(table, " X 1 = ", table * 1);

// console.log(table, " X 2 = ", table * 2);

// console.log(table, " X 3 = ", table * 3);

// console.log(table, " X 4 = ", table * 4);

// console.log(table, " X 5 = ", table * 5);

// let condition = true;

// while(condition) {
//     console.log("Hey HYC BUDDIES");

//     condition = false;
// }


// let num = 1;

// while(num < 5) {
//     console.log(num);

//     num = num + 1;
// }


// let table = 120;
// let count = 20;
// let count_start = 10;

// while(count_start <= count) {
//     console.log(table, " X ", count_start, " = ", table * count_start);
//     count_start = count_start + 1;
// }

// console.log("While loop ended");

// let sum = 0;
// let num = 1;

// while(num <= 10) {
//     sum = sum + num;
//     num = num + 1; 
// }

// console.log(sum);


// find given num is prime or not 


// let num = 21;

// let index = num - 1;

// let isPrime = true;

// while(index >= 2) {

//     if(num % index == 0) {
//         index = 1;
//         isPrime = false;
//     }

//     index = index - 1;
// }


// if(isPrime) {
//     console.log("THis is prime");
// }

// else {
//     console.log("This is not prime");
// }

// find the number of digits

let num = 5337542;

let count = 0;

while( num > 0 ) {
    count = count + 1;
    num = Math.floor(num / 10);
}

console.log(count);