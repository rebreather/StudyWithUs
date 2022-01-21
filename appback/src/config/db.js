const mysql = require("mysql");

const dbinfo = {
    host:"studylogin.clhijjaflnvt.ap-northeast-2.rds.amazonaws.com",
    user:"admin",
    password:"1q2w3e4r",
    database:"studylogin"
};

const db = mysql.createConnection(dbinfo);

db.connect();

module.exports = db;


// const mysql = require("mysql");

// const db = mysql.createConnection({
//     host:"studylogin.clhijjaflnvt.ap-northeast-2.rds.amazonaws.com",
//     user:"admin",
//     password:"1q2w3e4r",
//     database:"studylogin"
// });

// db.connect();

// module.exports = db;