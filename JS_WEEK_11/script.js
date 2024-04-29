function alertMessage(message) {
    alert("Testing");
}


let submit_btn_selector = document.getElementById("submit_btn");

submit_btn_selector.addEventListener("click", alertMessage);