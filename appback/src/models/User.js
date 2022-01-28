"use strict";

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body; //윗줄의 바디가 User의 body 객체로 들어감
    }

    async login() {
        const client = this.body;
        //var logined_userid = client.id;
        try {
            const {id, psword} = await UserStorage.getUserInfo(client.id); //데이터 베이스 속 아이디와 비밀번호
            if (id) {
                if (id === client.id && psword === client.psw){ //입력하는 아이디,비밀번호와 db속 아이디,비밀번호가 같을 때
                    return {success: true};
                }
                return {success:false, msg:"비밀번호가 틀렸습니다."};
            }
            return {success:false, msg:"존재하지 않는 아이디 입니다."};
        }
        catch (err) {
            return {success: false, msg:"로그인 실패"};
        }
    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client) //데이터가 저장되도록
            return response;
        }
        catch (err) {
            //console.error(err);
            return { success: false, msg: err};
        }
    }

}

module.exports = User;