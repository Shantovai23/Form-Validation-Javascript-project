function validation(){
    var userName=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var conPassword=document.getElementById("confirmpassword").value;
    var mobile=document.getElementById("Mobile").value;
    var email=document.getElementById("email").value;
/////USER
    if(userName==""){
        document.getElementById("usererror").innerHTML="*Username can not be empty";
        
        return false;
    }
    if((userName.length<=2) || (userName.length>=20)){
        document.getElementById("usererror").innerHTML="*Username length must be between 2 to 20";
        return false;
    }
    if(!isNaN(userName)){
        document.getElementById("usererror").innerHTML="*Only characters are allowed";
        return false;
    }

/////PASS
    if(password==""){
        document.getElementById("pass").innerHTML="*Password can not be empty";
        return false;
    }

    if(password.length<=5){
        document.getElementById("pass").innerHTML="*Password must be greater than 5";
        return false;
    }
    if(password!=conPassword){
        document.getElementById("conpass").innerHTML="*Password does not match";
        return false;
    }
//////CONPASS
    if(conPassword==""){
        document.getElementById("conpass").innerHTML="*Confirm Password can not be empty";
        return false;
    }
//////MOBILE
    if(mobile==""){
        document.getElementById("number").innerHTML="*Mobile Number can not be empty";
        return false;
    }
    if(isNaN(mobile)){
        document.getElementById("number").innerHTML="*Only numbers are allowed (0-9)";
        return false;
    }
    if(mobile.length!=11){
        document.getElementById("number").innerHTML="*Invalid Mobile Number";
        return false;
    }
//////EMAIl
    if(email==""){
        document.getElementById("validemail").innerHTML="*Email can not be empty";
        return false;
    }
    if(email.indexOf("@")==0){
        document.getElementById("validemail").innerHTML="*Invalid Position of @";
        return false;
    }
    if(email.indexOf("@")==-1){
        document.getElementById("validemail").innerHTML="*Missing @"
        return false;
    }
}