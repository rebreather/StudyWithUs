//html과 연결 되어있는 프론트 창.

"use strict";

const title = document.querySelector("#title");
const name = document.querySelector("#name");
const description = document.querySelector("#description");
const submitbutton = document.querySelector("#button");

submitbutton.addEventListener("click", write);

function write() {
    if(!title.value) return alert("제목을 입력해 주십시오.");
    if(!name.value) return alert("이름을 입력해 주십시오.");
    if(!description.value) return alert("내용을 입력해 주십시오.");

    const req = {
        //write.ejs 파일 안에 있는 id값에 const 변수에 담긴 객체를 보여줌.
        description: description.value,
        name: name.value,
        title: title.value
    };   

    fetch("/write", {
        method: "POST",
        headers: { //내가 전달하는 데이터가 json이라는걸 헤더로 표현 가능
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req) //js 객체를 json 객체로 변환
    }).then((res) => res.json()).then((res) => {
        if (res.success) {
            location.href = "/qna"; //글쓰기에 성공했을 때 qna 페이지로 이동.
        }
        else {
            alert(res.msg); //글쓰기에 실패 했을 때 알림창 뜸.
        }
    })
    .catch((err) => {
        console.error(new Error("글 작성 중 에러 발생"));
    });

}