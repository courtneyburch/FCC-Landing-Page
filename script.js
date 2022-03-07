document.querySel

document.querySelector(".submit-button").addEventListener('click', success)

function success(){
    const email = document.querySelector(".email-input").value;
    console.log(email);
    
    if(email){
        document.querySelector(".success-notice").innerHTML = "Thanks, your email has been submitted!";
        
    } else {
        document.querySelector(".success-notice").innerHTML = "Please enter a valid email address.";
    }
    document.querySelector(".success-notice").classList.remove('hidden');

};