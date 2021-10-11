"use strict";

const UserStorage = require("../../models/UserStorage");

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
        const id = req.body.id;
        const psword = req.body.psw;
        //const userStorage = new UserStorage();

        const users = UserStorage.getUsers("id","psword");
        //console.log(UserStorage.users);

        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패했습니다."
        return res.json(response);
    },
}

module.exports = { //외부로 내보내기, 꼭 쓸 것
    output,
    process
}