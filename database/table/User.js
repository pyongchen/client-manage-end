let BaseTable = require('./baseTable');
let conn = require('../conn');

/**
 * 用户：用户名，密码
 */
function User() {
  this.name = 'User';
  let keys = [
    { val: 'username', type: 'varchar(200)' },
    { val: 'password', type: 'varchar(200)' }
  ];
  BaseTable.call(this, this.name, keys);

  // 获取所有用户
  this.getAll = () => {
    let query = `select * from ${this.name}`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res);
      });
    });
  };

  this.getUserByName = getUserByName;
  this.updatePassword = updatePassword;
}

function getUserByName(username) {
  let query = `select * from ${this.name} where username = '${username}'`;
  return new Promise((resolve, reject) => {
    conn.query(query, (err, res) => {
      if(err) reject(err);
      else resolve(res[0]);
    });
  });
}

function updatePassword(id, password) {
  let query = `update ${this.name} set password = ${password} where id = ${id}`;
  return new Promise((resolve, reject) => {
    conn.query(query, (err, res) => {
      if(err) reject(err);
      else resolve(res[0]);
    });
  });
}

User.prototype = new BaseTable();
User.prototype.constructor = User;

module.exports = new User();
// let user = new User();
// user.create();
