const mysql = require("mysql");

const db = mysql.createConnection({
    host:"projectlogin.cczurmrqjvbs.ap-northeast-2.rds.amazonaws.com",
    user:"admin",
    password:"1q2w3e4r",
    database:"projectlogin"
});

db.connect();

module.exports = db;