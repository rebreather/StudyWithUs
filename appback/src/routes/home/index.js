"use strict";

const express = require("express");
const router = express.Router();

const ctr = require("./home.ctrl"); 

const db = require("../../config/db");

//localhost:5000/
router.get("/", ctr.output.hello); // home.ctrl.js 파일에 있는 hello 함수 실행

//localhost:5000/login
router.get("/login", ctr.output.login); //home.crtl.js 파일 안에 있는 함수 사용
router.post("/login", ctr.process.login); 

//localhost:5000/register (회원 등록)
router.get("/register", ctr.output.register);
router.post("/register", ctr.process.register);

//localhost:5000/main (메인 화면)
router.get("/main", function(req,res) {
    res.render("home/main");
});

//localhost:5000/qna (qna 메뉴)
//router.get("/qna",ctr.output.qna);
router.get('/qna', function (req, res) {
    var sql = 'SELECT * FROM question';    
    db.query(sql, function (err, rows, fields) {
        if(err) console.log('query is not excuted. select fail...\n' + err);
        else res.render("home/qna", {list : rows});
    });
});

//localhost:5000/write (글쓰기 페이지)
router.get("/write", ctr.output.write);
router.post("/write", ctr.process.write);



//외부에서 이 파일을 사용하도록 함.
module.exports = router; //외부로 내보내기