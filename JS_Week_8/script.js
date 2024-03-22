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

let test = "Hello";

function find_power(num, power) {

    console.log(test);

    let start = 1;
    
    let ans = 1;

    while( start <= power ) {

        ans = ans * num;

        start++;
    }

    return ans;
}
// console.log({start});

let ans_1 = find_power(5, 5);

test = "Namaste";

let ans_2 = find_power(2, 10);

let ans_3 = find_power(10, 7);

let ans_4 = find_power(3, 20);

console.log({ans_1, ans_2, ans_3, ans_4});








