"use strict";


const hello = (req, res) => {
    res.render("home/index")
};

const login = (req, res) => { //경로에 슬래시 필수
    res.render("home/login");
}

module.exports = { //외부로 내보내기, 꼭 쓸 것
    hello,
    login
}