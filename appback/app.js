const express = require("express");
const app = express();
const home = require("./src/routes/home/index.js");

// 앱 세팅
app.set("views", "./src/views"); // 템플릿이 있는 디렉토리
app.set("view engine", "ejs"); //사용할 템플릿 엔진


app.use("/", home); //use 메소드 -> 미들웨어를 등록하는 메소드
 //루트경로로 들어오면 home으로 보내준다는 의미, home 경로는 위에 명시 되어있음.

module.exports = app; //www.js를 쓰기 위해 내보냄.

