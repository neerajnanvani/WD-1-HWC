// console.log("Test");


// let para = document.getElementById("para_ne");
// console.log(para);

// document.getElementById("para_one").innerHTML = "THis is change html";

// let head = document.getElementsByClassName("test_heading");

// console.log(head);
// let inputVal = document.getElementById('test_input');

// let test_btn = document.getElementById("test_btn");

// function listenInput(event) {
//     console.log(event.target.value);
//     if(event.target.value >= 18) {
//         test_btn.disabled = false;
//     } else {
//         test_btn.disabled = true;
//     }
// }

// inputVal.addEventListener("input", listenInput);

// function listenBtn(event) {
//     console.log(inputVal.value);
// }


// test_btn.addEventListener("click", listenBtn);


// let test_it = document.querySelector("p");
// console.log(test_it);


let btn_selector = document.getElementById("showbtn");

let text_selector = document.getElementById("the_text");

let text_to_show = false;

function toggleText() {

    if(text_to_show) {
        text_selector.style.display = "none";
        text_to_show = false;
        btn_selector.innerHTML = "Show Text";
    } else {
        text_selector.style.display = "block";
        text_to_show = true;
        btn_selector.innerHTML = "Hide Text";
    }
}

btn_selector.addEventListener("click", toggleText);