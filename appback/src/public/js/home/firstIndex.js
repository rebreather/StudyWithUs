// index.ejs랑 연결되는 js파일
"use strict";

const signUpbtn = document.querySelector("#btn-signUp");
const loginbtn = document.querySelector("#btn-login");

signUpbtn.addEventListener("click", goToSignUp);
loginbtn.addEventListener("click", goToLogin);

function goToSignUp() {
    location.href = "/register";
}
function goToLogin() {
    location.href = "/login";
}