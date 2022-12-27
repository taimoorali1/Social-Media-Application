console.log("Form Document is working");


function signUp() {

    
    var name = document.getElementById('userName').value;   // document.(formName).(input_field_target_name) all is working on name
    var signUpEmail = document.getElementById('email').value;
    var signUpPassword = document.getElementById('password').value;
    var signUpRepeatPassword = document.getElementById('repeatPassword').value;
        


    if (signUpPassword.length < 6) {
        alert("Password Must be min 6 character long");
    }
    else if (signUpRepeatPassword.length < 6) {
        alert(" Repeat Password Must be 6 character long");
    }

    if (signUpPassword == signUpRepeatPassword) {
        localStorage.setItem("userName",name)
        localStorage.setItem("userEmail", signUpEmail);
        localStorage.setItem("userPassword", signUpPassword);
        localStorage.setItem("userRepeatPassword", signUpRepeatPassword);
        alert("Data Saved");
        window.location.href="login.html";
        var name ="";   
        var signUpEmail = "";
        var signUpPassword ="";
        var signUpRepeatPassword = "";
    }
    else {
        alert("Please Enter the Same Password in both field");
    }

}

function loginn() {
    
    var loginEmail = document.getElementById('login_email').value;
    var loginPassword = document.getElementById('login_password').value;

  
    if (loginPassword.length < 6) {
        alert("Password Must be 6 character to 12 character long");
    }

    let emailLocalValue = localStorage.getItem("userEmail");
    let passwordLocalValue = localStorage.getItem("userPassword");

    if (loginEmail == emailLocalValue && loginPassword == passwordLocalValue) {
        alert("Login Successfull");
        window.location.href = "index.html";
        var loginEmail = "";
        var loginPassword ="";
    }
    else {
        alert("Invalid Input !!Please Check again the Username and Password");        
    }
}



function logout() {
    window.location.href = "login.html";
}

function updatebtn(){
    window.location.href="sign_up.html";
}