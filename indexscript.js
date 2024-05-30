function FormValidation(){
    const Email = document.getElementById("email").value;
    const Password = document.getElementById("password").value;

    const ErrorEmail = document.getElementById("error_email");
    const ErrorPassword= document.getElementById("error-password");

    ErrorEmail.textContent = "";
    ErrorPassword.textContent = "";

    let isValid = true;

    if(Email === ""){
        ErrorEmail.textContent = "Please enter your email";
        isValid = false;
    }
    if(!Email.includes("@")){
        ErrorEmail.textContent = "Please enter your email properly";
        isValid = false;
    }
    if(Password === "" || Password.length < 6){
        ErrorPassword.textContent = "Please password must be atleast more than 6 characters";
        isValid = false;
    }
    return isValid;
}