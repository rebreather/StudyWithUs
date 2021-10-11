"use strict";

const output = {
    hello: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["gy","gyy","lgy"],
    psword: ["111","1234","1231"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const psword = req.body.psw;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패했습니다.",
        });
    },
}

module.exports = { //외부로 내보내기, 꼭 쓸 것
    output,
    process
}