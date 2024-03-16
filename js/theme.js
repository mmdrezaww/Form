const form = document.querySelector("form"),
    nextBtn = form.querySelector(".nextBtn"),
    backBtn = form.querySelector(".backBtn"),
    allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click",()=> {
    var email=document.getElementById("email");
    validateEmail(email);
    if (!validateEmail){
        alert("email is invalid");
    }
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
            // alert("input is empty")
        }
    })
})

function validateEmail(email){
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return emailPattern.test(email);
}

backBtn.addEventListener("click", () => form.classList.remove('secActive'));