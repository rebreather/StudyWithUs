"use strict";

const id = document.querySelector("#id");
const psword = document.querySelector("#psw");
const loginbutton = document.querySelector("button");


loginbutton.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psw: psword.value,
    };   
    console.log(req);

}