"use strict";

const db = require("../config/db");

class QuesionStorage { 
    
    // static getUserInfo(id){
    //     return new Promise((resolve, reject) => {
    //         const query = "SELECT * FROM users WHERE id = ?;";
    //         db.query(query, [id], (err, data) => {
    //             if (err) reject(`${err}`);
    //             resolve(data[0]);
    //         });
    //     });        
    // }

    static async save(questionInfo){
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, content) values(?, ?);";
            db.query(query, [questionInfo.id, questionInfo.content], (err) => {
                if (err)
                    reject(`${err}`);
                resolve({success: true});
            });
        });         
    }

}

module.exports = QuestionStorage;