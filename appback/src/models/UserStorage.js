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

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // 상단의 users를 getUserInfo의 users로 받아옴
          // => [id, psword, name] 이거를 밑줄의 userKeys로 넣음
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psw);

        return {success: true};

    }

}

module.exports = UserStorage;