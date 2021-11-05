//html과 연결 되어있는 프론트 창.

"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const psword = document.querySelector("#psw"); //DOM
const confirmpsword = document.querySelector("#confirmpsw");
const registerbutton = document.querySelector("#button");

registerbutton.addEventListener("click", register);

function register() {
    if(!id.value) return alert("아이디를 입력해 주십시오.");
    if(!name.value) return alert("이름을 입력해 주십시오.");
    if (psword.value !== confirmpsword.value)
        return alert("비밀번호가 일치하지 않습니다.");
    
    const req = {
        id: id.value, //register.ejs 파일 안에 있는 id값에 const 변수에 담긴 객체를 보여줌.
        psw: psword.value,
        name: name.value,
    };

    if(id.value == req.id) return alert("이미 존재하는 아이디 입니다.");

    fetch("/register", {
        method: "POST", //버튼이 눌리면
        headers: { //내가 전달하는 데이터가 json이라는걸 헤더로 표현 가능
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req) //js 객체를 json 객체로 변환
        // 회원가입할때 데이터들을 이 바디에 전달
    }).then((res) => res.json())
      .then((res) => {
        if (res.success) {
            location.href = "/login"; //회원가입에 성공했을 때 로그인 페이지로 이동.
        }
        else {
            alert(res.msg); //회원가입에 실패 했을 때 알림창 뜸.
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    });

}