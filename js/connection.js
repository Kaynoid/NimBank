const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({  // A connection is created to the nimbank schema on MySQL with the following credentials
    host : "localhost",
    user : "root",
    password : "root",
    database : "nimbank",
    multipleStatements : true
});

mysqlConnection.connect((err)=>{    // The connection is then initialized and will print feedback according to wether the connection was accepted or not
    if(!err)
        console.log("Connected!");
    else
        console.log("Connection Failed!");
})

module.exports = mysqlConnection;