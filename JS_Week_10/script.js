// console.log("Test");


// let para = document.getElementById("para_ne");
// console.log(para);

// document.getElementById("para_one").innerHTML = "THis is change html";

// let head = document.getElementsByClassName("test_heading");

// console.log(head);
let inputVal = document.getElementById('test_input');

let test_btn = document.getElementById("test_btn");

function listenInput(event) {
    console.log(event.target.value);
    if(event.target.value >= 18) {
        test_btn.disabled = false;
    } else {
        test_btn.disabled = true;
    }
}

inputVal.addEventListener("input", listenInput);

function listenBtn(event) {
    console.log(inputVal.value);
}


test_btn.addEventListener("click", listenBtn);