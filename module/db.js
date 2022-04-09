var mysql = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'hospitals'
  });
   
  // connection.connect();

  module.exports = connection;