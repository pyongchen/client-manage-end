let mysql = require('mysql');
const config = {
  host: '127.0.0.1',
  user: 'root',
  password: 'cpy25511211',
  port: '3306',
  database: 'client_manage',
  charset:'UTF8_GENERAL_CI'
};

let conn = mysql.createConnection(config);

module.exports = conn;
