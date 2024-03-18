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

function find_power(num, power) {

    let start = 1;
    
    let ans = 1;

    while( start <= power ) {

        ans = ans * num;

        start++;

    }

    console.log(ans);
}


find_power(5, 5);

find_power(2, 10);

find_power(10, 7);

find_power(3, 20);








