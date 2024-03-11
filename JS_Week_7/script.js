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


// let arr = [1, 3, 4, 5, 5, 4, 3, 1];

// let start = 0;

// let end = arr.length - 1;

// let is_palindrome = true;

// while(start < end) {

//     if(arr[start] != arr[end]) { 
//         is_palindrome = false;
//         break;
//     }

//     start++;
//     end--;
// }


// if(is_palindrome) {
//     console.log("The array is palindrome");
// }
// else {
//     console.log("This array is not palindrome");
// }


// let arr = [3, 1, 6, 2, 8];
// console.log("Old", arr);
// for(let index_one = 0; index_one < arr.length - 1; index_one++) {  

//     for(let index_two = index_one + 1; index_two < arr.length; index_two++) {

//         if(arr[index_one] > arr[index_two]) {
//             let temp = arr[index_one];
//             arr[index_one] = arr[index_two];
//             arr[index_two] = temp; 
//         }

//     }
// }


// console.log("Sorted", arr);


// for(let index = 0; index < 5; index++) {
//     for(let other = index + 1; other < 5; other++) {
//         console.log(index, other);
//     }
// }


// for(let index_one = 1; index_one < 5; index_one++) { // loop 1
//     for(let index_two = 1; index_two < 5; index_two++) { // loop 2
//         console.log(index_one, "," , index_two);
//     }


    
// }


// for(let i = 1; i <= 5; i++) {
//     console.log(i, i + 1);
// }

// for(let i = 1; i <= 5; i = i + 2)  {
//     console.log(i, i + 1);
// }

// for(let i = 1; i < 4; i++) {
//     for(let j = 1; j < 4; j++) {
//         console.log(i, j);
//     }
// }

// console.log("This is \n neeraj");

// let str_ans = "";

// for(let i = 1; i <=5; i++) {
//     for(let j = 1; j <= i; j++) {
//         str_ans = str_ans + "* ";
//     }

//     str_ans = str_ans + "\n";

// }

// console.log(str_ans);


let str_ans = "";

for(let i = 1; i <=5; i++) {
    for(let j = 1; j <= 6 - i; j++) {
        str_ans = str_ans + "* ";
    }

    str_ans = str_ans + "\n";

}

console.log(str_ans);