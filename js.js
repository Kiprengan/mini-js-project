// initializing object variable on a global scope to store details
let userDetailsDatabase = {}

// function to get details
function getUserDetails(){

    // this function is to check if the username is valid
    function validateUserName(userName){

        // if the username is less than 10 or 10, it is valid
        if (userName.length < 10 && userName.length > 0){
            return true
        }
        // if the username is not less than 10, it is not valid
        else{
            return false
        }
    
    }

    // this function checks if the email is valid
    function validateUserEmail(email){
        // sets email check criteria
        const emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
        // checks if its an email
        emailCheckResult = emailCheck.test(email);
   
        // if the email contains @, it is valid
        if (emailCheckResult == true){
            return true
        }
        // if the email does not contain @, it is not valid
        else{
            return false
        }
    
    }


    // this function is to check if the phone number is valid
    function validateUserPhoneNumber(userName){
   
        // if the phone number is 11, it is valid
        if (phoneNumber.length == 11){
            return true
        }
        // if the phone number is less than  or greater than 11, it is not valid
        else{
            return false
        }
    
    }


    
    // this function is to validate the password
    function validatePassword(password){
      
        // if the password is less than 6, it is not valid
        if (password.length < 6){
            return false
        }
        // if the password is 6 or greater than 6, it is valid
        else{
            return true
        }
    }



    
    // this function checks if confirmPassword matches password
    function validateConfirmPassword(confirmPassword){
     // if confirmPassword does not match password, it is invalid
        if (confirmPassword != password){
            return false
        }
        // // if confirmPassword matches password, it is valid
        else{
            return true
        }
    }

    
    //initialize username variable and prompts the user to enter username
    let userName = prompt("Enter your UserName");

    // if the user cancel or doesnt enter anything the function ends
    if(userName == null){
        return
    }

    // if the username is not valid, it keeps asking for a valid one
    while(validateUserName(userName) == false){
        userName = prompt("UserName must be less than 10 and greater than 0");
    }

    //stores the userName in the userDetailsDatabase
    userDetailsDatabase["UserName"] = userName

    // prompts the user to enter phone number
    phoneNumber = prompt("Enter your phone number");

    // if the user cancel or doesnt enter anything the function ends
    if(phoneNumber == null){
         return
    }
 
    // if the phone number is not valid, it keeps asking for a valid one
    while(validateUserPhoneNumber(phoneNumber) == false){
        phoneNumber = prompt("Phone number must be 11 digits");
    }
 
    //stores the user phone number in the userDetailsDatabase
    userDetailsDatabase["phoneNumber"] = phoneNumber


    // prompts the user to enter email
    email = prompt("Enter your email");

    // if the user cancel or doesnt enter anything the function ends
    if(email == null){
        return
    }

    // if the email is not valid, it keeps asking for a valid one
    while(validateUserEmail(email) == false){
        email = prompt("Enter a valid email");
    }

    //stores the email in the userDetailsDatabase object
    userDetailsDatabase["Email"] = email


    // prompts the user to enter password
    let password = prompt("Enter your password");

    // if the user cancels or doesnt enter anything, the function ends
    if(password == null){
        return
    }

    // if the password is not valid, it keeps asking for a valid one
    while(validatePassword(password) == false){
        password = prompt("invalid password, password should be greater than or equal to 6 in length")
    }


    // prompts user to confirm password
    let confirmPassword = prompt("Confirm your password")

    // if the user enters nothing or cancels, the function ends
    if(confirmPassword == null){
        return
    }
    // if the confirm password doesnt match the password, it keeps asking for a confirm password
    while(validateConfirmPassword(confirmPassword) == false){
        confirmPassword = prompt("Confirm password doesnt match password, try again!")
    }

    // alert a message after details have been submitted
    alert("Details submitted successfully")

}

// function to display details of user
function displayDetails(){
    alert(`YOUR DETAILS\n\nUsername: ${userDetailsDatabase.UserName}\nPhone Number: ${userDetailsDatabase.phoneNumber}\nEmail: ${userDetailsDatabase.Email}`)
}
