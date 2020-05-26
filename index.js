const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordTwo = document.getElementById('passwordTwo');


function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input)

    }
    else{
        showError(input, 'Email is not valid');
    }
}

function checkRequired(inputArray){

    inputArray.forEach(function(input){
        if(input.value.trim() =='')
            showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} is required`);
        else
            showSuccess(input);
    });
}

function checkLength(input, min, max){
    if(input.value.length <min)
        showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} must be at least ${min} characters`)
    else if(input.value.length>max)
        showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} must be less than ${min} characters`)
    else{
        showSuccess(input)
    }
}


function checkPasswords(password1, password2){
    if(password1.value != password2.value)
        showError(passwordTwo, 'Passwords do not match');

}

form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username,email,password,passwordTwo]);
    checkLength(username, 4,15)
    checkLength(password, 8, 25)
    checkPasswords(password,passwordTwo);
});