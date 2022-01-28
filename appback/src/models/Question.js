"use strict";

const { response } = require("express");
const QuestionStorage = require("./QuestionStorage");

class Question {
    constructor(body){
        this.body = body; //윗줄의 바디가 User의 body 객체로 들어감
    }

    async submit() { //질문 저장
        const client = this.body;
        try {
            const response = await QuestionStorage.save(client) //데이터가 저장되도록
            return response;
        }
        catch (err) {
            //console.error(err);
            return { success: false, msg: err};
        }
    }
}

module.exports = Question;