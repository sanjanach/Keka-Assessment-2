function ValidateName(){
    var name = document.getElementById("InputName").value;
    if(name.length == 0){
        document.getElementById("NameError").innerHTML = "Name is required"
    }else{
        document.getElementById("NameError").innerHTML = " "
    }
}

function ValidateEmail(){
    var email = document.getElementById("InputEmail").value;
    let regex = /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+)\.([a-z\.]{3,10})$/;
    if(email.length == 0){
       document.getElementById("EmailError").innerHTML = "Email is required";
      }else if(!email.match(regex)){
       document.getElementById("EmailError").innerHTML = "Enter a valid Email";
      }else{
       document.getElementById("EmailError").innerHTML = " ";
      }
}

function ValidateMail(){
    var mail = document.getElementById("InputMail").value;
    let regex = /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+)\.([a-z\.]{3,10})$/;
 
    if(mail.length == 0){
       document.getElementById("MailError").innerHTML = "Email is required";
      }else if(!mail.match(regex)){
       document.getElementById("MailError").innerHTML = "Enter a valid Email";
      }else{
       document.getElementById("MailError").innerHTML = " ";
      }
}

function ValidateAll(){
    var name = document.getElementById("InputName").value;
    var mail = document.getElementById("InputMail").value;
    var email = document.getElementById("InputEmail").value;

    if(name.length > 0 && email.length > 0 && mail.length > 0){
        document.getElementById("ErrorMessage").innerHTML = " "
    }else{

        return false
    }
}

function ValidateAllSubmit(){
    var name = document.getElementById("InputName").value;
    var mail = document.getElementById("InputMail").value;
    var email = document.getElementById("InputEmail").value;

    if(name.length > 0 && email.length > 0 && mail.length > 0){
        alert("Form Submitted")
    }else{
        ValidateName()
        ValidateEmail()
        ValidateMail()
        ValidateDropdown()
        document.getElementById("ErrorMessage").innerHTML = "Please fill all the details"
        return false
    }
}

function ValidateDropdown(){
    var opt = document.getElementById("Dropdown");
    opt.options[0].disabled = true;

    if(opt.options[opt.selectedIndex].value == 0){
        document.getElementById("DropdownError").innerHTML = ""
    }else{
        document.getElementById("DropdownError").innerHTML = "Select an option"
    }

}
