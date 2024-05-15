// console.log("Testing");

// let a = 10;

// console.log(a + b);

// console.log(5 * 4, 5 / 2);

// console.log("5" + 2 + 2);

// console.log(5 + 2 + "2");


// console.log("Hey this is neeraj", 6 + 3);

// let my_name = "Neeraj";

// console.log(`THis is ${3 * 5} and ${my_name}`);


// function say_hello(my_name) {
//     console.log(`Hello ${my_name}`);
// }

// say_hello("Kehkasha");


// function addNumbers(a, b) {
//     return a + b;
// }

// let sum = addNumbers(3, 7);

// console.log(sum);

function sum_2(arr) {
    // let copy_arr = [...arr];
    let copy_arr = arr;

    for(let index = 0; index < copy_arr.length; index++) {
        copy_arr[index] = copy_arr[index] + 2;
    }

    return copy_arr;
}

let arr = [6, 5, 1, 5];

let result = sum_2(arr);
console.log(result);
