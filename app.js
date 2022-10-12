

function validate() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpass = document.getElementById('conf_pass').value;

    checkusername(username);
    checkemail(email);
    checkpassword(password);
    checkpasswordmatch(password ,cpass);

}



function checkusername(username) {

    if(username.length > 7){
        document.getElementById('username').classList.add('success');
        document.getElementById('username').classList.replace('error', 'success');
        document.getElementById('username_error').innerText='';
    }else {
        document.getElementById('username').classList.add('error');
        document.getElementById('username_error').innerText='username must me 8 letters long.';
        
    }
}

function checkemail(email){
    if(email.includes('@gmail')){
        document.getElementById('email').classList.add('success');
        document.getElementById('email').classList.replace('error', 'success');
        document.getElementById('email_err').innerText='';
    }else {
        document.getElementById('email').classList.add('error');
        document.getElementById('email_err').innerText='Please enter valid email';
    }
}

function checkpassword(pass){
    if(pass.length >7 && pass.includes("@")){
        document.getElementById('password').classList.add('success');
        document.getElementById('password').classList.replace('error', 'success');
        document.getElementById('password_err').innerText='';
    }else {
        document.getElementById('password').classList.add('error');
        document.getElementById('password_err').innerText='password must have length 7 and @ contain';
    }
}


function checkpasswordmatch(pass, cpass){
    if(pass === cpass){
        document.getElementById('conf_pass').classList.add('success');
        document.getElementById('conf_pass').classList.replace('error', 'success');
        document.getElementById('conf_pass_err').innerText='';
    }else {
        document.getElementById('conf_pass').classList.add('error');
        document.getElementById('conf_pass_err').innerText='your confirm password must match!';
    }
}