"use strict";

const db = require("../config/db");


class QuestionStorage { 

    static async save(questionInfo){
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO question(title, name, description) values(?, ?, ?);";
            db.query(query, [questionInfo.title, questionInfo.name, questionInfo.description], (err) => { //아이디, 이름, 내용
                if (err)
                    reject(`${err}`);
                resolve({success: true});
            });
        });         
    }

}


module.exports = QuestionStorage;