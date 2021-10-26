"use strict";

const PORT = 3000;

//모듈
const express = require("express");
const app = express();
const bodyParser = require("body-Parser");

//라우팅
const home = require("./src/routes/home/index.js");

// 앱 세팅
app.set("views", "./src/views"); // 템플릿이 있는 디렉토리
app.set("view engine", "ejs"); //사용할 템플릿 엔진
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));



app.use("/", home); //use 메소드 -> 미들웨어를 등록하는 메소드
 //루트경로로 들어오면 home으로 보내준다는 의미, home 경로는 위에 명시 되어있음.
app.listen(PORT, () => {
     console.log("서버 가동");
});

//module.exports = app; //www.js를 쓰기 위해 내보냄.