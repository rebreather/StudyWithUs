"use strict";

const express = require("express");
const router = express.Router();

const ctr = require("./home.ctrl"); 

router.get("/", ctr.output.hello); // home.ctrl.js 파일에 있는 hello 함수 실행
router.get("/login", ctr.output.login); //컨트롤러
router.post("/login", ctr.process.login); 

//외부에서 이 파일을 사용하도록 함.
module.exports = router; //외부로 내보내기