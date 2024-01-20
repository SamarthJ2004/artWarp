document.querySelector(".showToggle").addEventListener("click",()=>{
    let x=document.getElementById("password");
    if (x.type==="password"){
        x.type="text";
        document.querySelector(".showToggle").innerHTML="<i class='fa-regular fa-eye'></i>";
    }else{
        x.type="password";
        document.querySelector(".showToggle").innerHTML="<i class='fa-regular fa-eye-slash'></i>";
    }
});

const myInput = document.getElementById("password");
const length = document.getElementById("length");
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}
myInput.onkeyup = function() {
    if(myInput.value.length >= 6) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}