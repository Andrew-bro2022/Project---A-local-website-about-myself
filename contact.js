function formValidation() {
    clearErrors();
    
    let result;
    result = validateStreet() && result;    
    result = validateZipcode() && result;
    result = validateCity() && result;

    return result;
 }


 //Validate input street name
 function validateStreet(){
    let errors = document.querySelector("#errors");
    let invalidBorderAlarm = document.getElementById("Street");
    let valid = true;
    let numString ="0123456789";
    let inputValue = document.signup.Street.value.trim();

    for(let i=0; i < inputValue.length; i++){
        if(numString.indexOf(inputValue.substr(i,1)) >= 0){
            valid = false;
            break;
        }
    }
    if(!valid){
        errors.innerHTML += "<p>* Street: Please enter a meaningful street name without digits.</p>";
        invalidBorderAlarm.style.border="red 2px solid";
    }
    return valid;
 }


 //Validate Zipcode
 function validateZipcode(){

    let errors = document.querySelector("#errors");
    let invalidBorderAlarm = document.getElementById("Postal_code");
    let valid = false;
    let alphString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numString ="0123456789";
    let inputValue = document.signup.Postal_code.value.trim();

    if(inputValue.length == 6){
        for(let i = 0; i < 6; i++){
            if(alphString.indexOf(inputValue.substr(i,1)) >=0 && (i % 2 == 0)){
                valid = true;
            }
            else if(numString.indexOf(inputValue.substr(i,1)) >=0 && (i % 2 == 1)){
                valid = true;
            }
            else{
                errors.innerHTML += "<p>* Postal code: Please enter a valid Canadian Postal code, like C1A1A7.</p>";
                invalidBorderAlarm.style.border="red 2px solid";
                valid =false;
                break;
            }
        }
    }else if(inputValue.length == 0){
        valid = true;
    }
    else{
        errors.innerHTML += "<p>* Postal code: Please enter a valid Canadian Postal code, like C1A1A7.</p>";
        invalidBorderAlarm.style.border="red 2px solid";
    }
    return valid;
 }

 //Validate city
function validateCity(){
    let errors = document.querySelector("#errors");
    let invalidBorderAlarm = document.getElementById("City");
    let valid = true;
    let inputValue = document.signup.City.value.trim();
    inputValue = inputValue.toUpperCase();

    for(let i=0; i < inputValue.length; i++){
        if(inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z"){
            valid = false;
        }
    }

    if(!valid){
        errors.innerHTML += "<p>* City: Please enter a valid Canadian city name, like Toronto.</p>";
        invalidBorderAlarm.style.border="red 2px solid";
    }
    return valid;
 }

 // Clear errors
 function clearErrors(){
    document.querySelector("#errors").innerHTML = "";
 }