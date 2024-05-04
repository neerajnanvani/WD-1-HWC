let input_selectors = document.getElementsByClassName("form_input");

let submit_btn_selector = document.getElementById("submit_btn");

let clear_btn_selector = document.getElementById("clear_btn");

let age_input_selector = document.getElementById("age");

function alertMessage(message) {
    alert(message);
}

function testInputFields() {
    for(let index = 0; index < input_selectors.length; index++) {
        if(input_selectors[index].value == '') {
            alertMessage("Please fill all the fields");
            return;
        }
    }

    if(age_input_selector.value < 0) {
        alertMessage("Please fill correct age");
        return;
    }

    if(age_input_selector.value < 18) {
        alertMessage("Please fill age above or equal 18");
        return;
    }

    alertMessage("Form Validation Done")
}

function clearAllValues() {
    for(let index = 0; index < input_selectors.length; index++) {
        input_selectors[index].value = '';
    }
}

submit_btn_selector.addEventListener("click", testInputFields);

clear_btn_selector.addEventListener("click", clearAllValues);

