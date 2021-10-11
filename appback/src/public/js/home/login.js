//html과 연결 되어있는 프론트 창.

"use strict";

const id = document.querySelector("#id");
const psword = document.querySelector("#psw"); //DOM
const loginbutton = document.querySelector("button");


loginbutton.addEventListener("click", login);

function login() {
    const req = {
        id: id.value, //login.ejs 파일 안에 있는 id값에 const 변수에 담긴 객체를 보여줌.
        psw: psword.value,
    };   

    fetch("/login", {
        method: "POST",
        headers: { //내가 전달하는 데이터가 json이라는걸 헤더로 표현 가능
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req) //js 객체를 json 객체로 변환
    }).then((res) => res.json()).then((res) => {
        if (res.success) {
            location.href = "/"; //로그인에 성공했을 때 메인 페이지로 이동.
        }
        else {
            alert(res.msg); //로그인에 실패 했을 때 알림창 뜸.
        }
    })
    .catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
    });

}