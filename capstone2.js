alert("Welcome!");

document.getElementById("Submit").addEventListener("click", function(e){
var input = document.getElementById("text");
function checkAlert() {
    if (input.value == ""){
        alert("hello");
    }
    else{
        console.log("You typed", input.value);
    }
}
});

const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
