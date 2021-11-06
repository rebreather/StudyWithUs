const mysql = require("mysql");

const db = mysql.createConnection({
    host:"studywithuslogin.clhijjaflnvt.ap-northeast-2.rds.amazonaws.com",
    user:"admin",
    password:"1q2w3e4r",
    database:"studywithuslogin"
});

db.connect();

module.exports = db;