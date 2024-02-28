// Find an element in array

// let arr = ["Suresh", "Ramesh", "Kamlesh", "jignesh", "Palash", "Pranjal"];

// let find_name = "jignesh";

// let find_name_index = -1;

// for(let index = 0; index < arr.length; index++) {
//     if(arr[index] == find_name) {
//         find_name_index = index;

//         break;
//     }
// }

// if(find_name_index != -1) {
//     console.log("Banda mil gya at index", find_name_index);
// }

// else {
//     console.log("Bhai banda nahi mila");
// }


// Calcuate power and replace the value

// let arr = [2, 5, 3, 7, 8, 10, 32, 4, 9];

// let power = 5;

// console.log("Before", arr);


// for(let index = 0; index < arr.length; index++) {
//     arr[index] = Math.pow(arr[index], power);
// }

// console.log("After",arr)


// Calculate sum of all array elements


// let arr = [4, 6, 2, 9, 10, 3, 2, 1, 7, 8, 9];

// let sum = 0;

// for(let index = 0; index < arr.length; index++) {
//     sum = sum + arr[index];
// }

// console.log(sum)


//palindrome array check


let arr = [1, 3, 4, 5, 5, 4, 3, 1];

let start = 0;

let end = arr.length - 1;

let is_palindrome = true;

while(start < end) {

    if(arr[start] != arr[end]) {
        is_palindrome = false;
        break;
    }

    start++;
    end--;
}


if(is_palindrome) {
    console.log("The array is palindrome");
}
else {
    console.log("This array is not palindrome");
}


