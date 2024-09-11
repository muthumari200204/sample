const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
};
String.prototype.isAlpha = function () {
    return !!this.match(/^[a-zA-Z]*$/);
};
function checkRequired(inputs) {
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            // Error
            errorInput(input, "Please fill out this field");
        } else {
            // Success
            successInput(input);
        }
    });
}
function checkLength (input, min, max){
    const password = input.value.trim().length;
     if(password<min){
        errorInput(input, `must be atleast greater than ${min} characters`);
     }else if(password>max){
        errorInput(input, `must be atleast lesser than ${max} characters`);
     } else{
        successInput(input);
     }
}
function errorInput(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group error";
    const p = formGroup.querySelector('p');
    p.innerText = message;
}
function successInput(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
    const p = formGroup.querySelector('p');
    p.innerText = "";
}
function checkEmail(input){
    if (!input.value.trim().isEmail()){
        errorInput(input, `This is an not valid email address`);
    }
}
function checkAlpha(input) {
    if (!input.value.trim().isAlpha()){
        errorInput(input, `Must be Alphabets`);
    }
}
function checkConfirmPassword(password,password2){
    if (!password.value != password2.value){
        errorInput(password2,`does not match`);
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username,2,15);
    checkEmail(email);
    checkAlpha(username);
    window.location.href="submit.html";
});






