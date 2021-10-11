"use strict";

const express = require("express");
const router = express.Router();

const ctr = require("./home.ctrl"); 

router.get("/", ctr.hello); // home.ctrl.js 파일에 있는 hello 함수 실행
router.get("/login", ctr.login //컨트롤러
);

//외부에서 이 파일을 사용하도록 함.
module.exports = router; //외부로 내보내기