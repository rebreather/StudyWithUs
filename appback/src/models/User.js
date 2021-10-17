"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body; //윗줄의 바디가 User의 body 객체로 들어감

    }

    login() {
        const {id, psword} = UserStorage.getUserInfo(this.body.id);

        if (id) {
            if (id === this.body.id && psword === this.body.psw){
                return {success: true};
            }
            return {success:false, msg:"비밀번호가 틀렸습니다."};
        }
        return {success:false, msg:"존재하지 않는 아이디 입니다."};
    }

}

module.exports = User;