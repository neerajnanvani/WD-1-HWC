// let obj = {
//     "bca60" : "Neeraj Nanvani",
//     "bca63" : "Sunil Kumar"
// }

// console.log(obj);

// console.log(obj["bca6"]);

// obj["bca60"] = "Hey IM test";

// console.log(obj);

// delete obj["bca60"];

// console.log("obj", obj);

// let power = Math.pow(9, 5);

// console.log(power);


// let num = 9;

// let power = 5;

// let start = 1;

// let ans = 1;

// while( start <= power ) {

//     ans = ans * num;

//     start++;

// }


// console.log(ans);

// let test = "Hello";

// function find_power(num, power) {

//     console.log(test);

//     let start = 1;
    
//     let ans = 1;

//     while( start <= power ) {

//         ans = ans * num;

//         start++;
//     }

//     return ans;
// }
// // console.log({start});

// let ans_1 = find_power(5, 5);

// test = "Namaste";

// let ans_2 = find_power(2, 10);

// let ans_3 = find_power(10, 7);

// let ans_4 = find_power(3, 20);

// console.log({ans_1, ans_2, ans_3, ans_4});


// let a = 5;
// let b = 10;

// let sum = a + b;

// let mul = a * b;

// let div = a / b;


// console.log(sum, mul, div);

function calculate_numbers(a, b, mode) {

    if(mode == "sum") {
        return a + b;
    }

    if(mode == 'sub') {
        return a - b;
    }

    if(mode == "mul") {
        return a * b;
    }

    if(mode == "div") {
        return a / b;
    }

    return "Wrong mode given";
}

let ans = calculate_numbers(10, 5, "alpha");

console.log(ans);