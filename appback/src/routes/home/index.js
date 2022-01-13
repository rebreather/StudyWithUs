"use strict";

const express = require("express");
const router = express.Router();

const ctr = require("./home.ctrl"); 

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
router.get("/qna",ctr.output.qna);
router.post('/qna', function(req, res) {
    // 입력한 값 가져오기
    var title = req.body.title;
    var name = req.body.name;
    var description = req.body.description;
  
    // 쿼리 작성
    var sql = 'INSERT INTO question(name, title, description) values (?, ?, ?)';
    var params = [questionInfo.id, questionInfo.name, questionInfo.description];
  
    // 쿼리 실행
    db.query(sql, params, function(err, rows, fields) {
      if(err)
        console.log(err);
        reject(`${err}`);
        resolve({success: true});
    });
});

//localhost:5000/write (글쓰기 페이지)
router.get("/write", ctr.output.write);
router.post("/write", ctr.process.write);



//외부에서 이 파일을 사용하도록 함.
module.exports = router; //외부로 내보내기