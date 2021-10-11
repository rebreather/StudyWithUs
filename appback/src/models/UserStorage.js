"use strict";

class UserStorage {
    static #users = { //const 같은 선언자 필요없음
        id: ["gy","gyy","lgy"],
        psword: ["111","1234","1231"],
        name: ["우리", "연", "김"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
                         //fields 배열의 초기값이 newUsers에 들어가고 그 다음 변수가 field에 들어감
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        //console.log(newUsers);
        return newUsers;
    }

}

module.exports = UserStorage;