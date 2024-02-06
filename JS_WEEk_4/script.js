// let str = "My name is khan";

// console.log(str.length);


// console.log(str[5]);

// console.log(str[13]);

// console.log(str[15]);

// let str1 = "hello";

// let str2 = "Hello";

// console.log(str1 == str2);

// let str3 = "H";

// console.log(str3 == str2[0]);


// let index = 0;

// let str = "Namaste Beta Namaste";

// while(index < str.length) {
//     console.log(str[index]);

//     index++;
// }


// find vowel in string

// let index = 0;

// let str = "Neeraj ";

// let isVowel = false;

// while(index < str.length) {

//     if(str[index] == 'a' || str[index] == 'e' || str[index] == 'i' || str[index] == 'o' || str[index] == 'u') {
        
//         isVowel = true;

//         index = str.length;
//     } 

//     index++;
// }

// if(isVowel) {
//     console.log("Vowel mil gya");
// } else {
//     console.log("Vowel  nahi mila")
// }


// count vowels 

let str = "my name is neeraj";

let index = 0;

let vowel_count = 0;

while( index < str.length ) {

    if(str[index] == 'a' || str[index] == 'e' || str[index] == 'i' || str[index] == 'o' || str[index] == 'u') {
        // vowel_count = vowel_count + 1;
        vowel_count++;
    }

    index++;
}

console.log("The vowels in str is ", vowel_count);

