const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")

Router.get("/", (req, res)=>{
    mysqlConnection.query("SELECT * from USERS", (err, rows, fields)=>{     // Initially get all data from nimbank schema's users table
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
})

//Router.query

module.exports = Router;