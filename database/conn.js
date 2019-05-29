let mysql = require('mysql');
let env = process.env.NODE_ENV;
let password = env == 'pro' ? 'hao8r5sT!!' : 'cpy25511211';
const config = {
  host: '127.0.0.1',
  user: 'root',
  password: password,
  port: '3306',
  database: 'client_manage',
  charset:'UTF8_GENERAL_CI'
};

let conn = mysql.createConnection(config);

module.exports = conn;
