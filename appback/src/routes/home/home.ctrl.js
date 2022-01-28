"use strict";

const User = require("../../models/User");
const Question = require("../../models/Question");

const output = {
    hello: (req, res) => {
        res.render("home/index"); 
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req,res) => {
        res.render("home/register");
    },
    schedules: (req,res) => {
        res.render("home/schedules");
    },
    write: (req,res) => {
        res.render("home/write");
    }
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body); // User클래스의 생성자로 들어감
        const response = await user.login();
        return res.json(response);
    },
    register: async(req, res) => {
        const user = new User(req.body); 
        const response = await user.register();
        return res.json(response);
    },
    write: async (req, res) => {
        const question = new Question(req.body);
        const response = await question.submit();
        return res.json(response);
    }
}

module.exports = { //외부로 내보내기, 꼭 쓸 것
    output,
    process
};
