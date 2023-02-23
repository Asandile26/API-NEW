require('dotenv').config();
const { createPool } = require('mysql');
//create connection variable

let connection = createPool({
    host: process.env.DBHost,
    user: process.env.DBUser,
    password: process.env.DBpassword,
    port: process.env.DBPort,
    database: process.env.DBName,
    multipleStatements: true
});
module.exports = connection;