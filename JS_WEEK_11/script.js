let input_selectors = document.getElementsByClassName("form_input");

let submit_btn_selector = document.getElementById("submit_btn");

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

    alertMessage("Form Validation Done")
}

submit_btn_selector.addEventListener("click", testInputFields);

