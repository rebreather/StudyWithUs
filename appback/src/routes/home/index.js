"use strict";

const express = require("express");
const router = express.Router();

const ctr = require("./home.ctrl"); 

router.get("/", ctr.output.hello); // home.ctrl.js 파일에 있는 hello 함수 실행
router.get("/login", ctr.output.login); //home.crtl.js 파일 안에 있는 함수 사용
router.post("/login", ctr.process.login); 

router.get("/register", ctr.output.register);
router.post("/register", ctr.process.register);

router.get("/main", ctr.output.main);
//router.post("/main", ctr.process.main);

router.get("/qna", ctr.output.qna);

router.get("/write", ctr.output.write);
router.post("/write", ctr.process.write);


//router.get("/schedules", ctr.output.schedules);


//외부에서 이 파일을 사용하도록 함.
module.exports = router; //외부로 내보내기