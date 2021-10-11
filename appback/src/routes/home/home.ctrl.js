"use strict";

const output = {
    hello: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        console.log(req.body);
    }
}

module.exports = { //외부로 내보내기, 꼭 쓸 것
    output,
    process
}