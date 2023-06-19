const mysql = require('mysql2');

// create pool or connection

exports.promisePool = mysql.createPool(
    host: '127.0.0.1',
    user: 'root'
    password: 'firstzen'
    database: 'cars' 


}).promise()

