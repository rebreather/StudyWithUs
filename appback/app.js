"use strict";

const PORT = process.env.PORT || 5000; //5000번 포트에서 실행


//모듈
const express = require("express");
//const mysql = require("mysql");
const path = require('path');
const app = express();
//const session = require("express-session");
//const MySQLStore = require("express-mysql-session")(session);
//const sessionStore = new MySQLStore(dbinfo);
const bodyParser = require("body-Parser");


// 앱 세팅
app.set("views", "./src/views"); // 템플릿이 있는 디렉토리
app.set("view engine", "ejs"); //사용할 템플릿 엔진

app.use(express.static(`${__dirname}/src/public`));
app.use(express.static(path.join(__dirname, 'front/build')));

app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

//세션 사용
// app.use(session({
//     key: "lalala",
//     secret: "1q2w3e4r",
//     store: sessionStore,
//     resave: false,
//     saveUninitialized: false, //무조건 세션 구동
//     })
// );

//라우팅
app.use("/", require("./src/routes/home/index.js")); //use 메소드 -> 미들웨어를 등록하는 메소드
 //루트경로로 들어오면 home으로 보내준다는 의미, home 경로는 위에 명시 되어있음.


 app.listen(PORT, () => {
     console.log("서버 가동");
});

//module.exports = app; //www.js를 쓰기 위해 내보냄.