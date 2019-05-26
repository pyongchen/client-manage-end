let BaseTable = require('./baseTable');
let conn = require('../conn');

/**
 * 用户：客户编号、客户名称、所属业务员、所属部门、录入日期
 */
function Client() {
  let name = 'Client';
  let keys = [
    { val: 'number', type: 'text' },
    { val: 'name', type: 'text' },
    { val: 'salesman', type: 'text' },
    { val: 'department', type: 'text' },
    { val: 'date', type: 'date' }
  ];
  BaseTable.call(this, name, keys);

  this.getAll = getAll; // 获取所有客户
  this.updateClient = updateClient; // 更新客户
  this.deleteItem = deleteItem; // 根据id删除客户
  this.allDepartment = allDepartment; // 根据id删除客户
}

function getAll(params) {
  let query = `select * from ${this.name} where date >= '${params.startDate}' and date <= '${params.endDate}'`;
  if (params.department) query += ` and department = '${params.department}'`;
  console.log(query);
  return new Promise((resolve, reject) => {
    conn.query(query, (err, res) => {
      if(err) reject(err);
      else resolve(res);
    });
  });
}

function updateClient(id, params) {
  let query = `update ${this.name} set `;
  for(let key in params) query += (key + "='" + params[key] + "',");
  query = query.substring(0, query.length - 1);
  query += ' where id = ' + id + ';';
  console.log(query);
  return new Promise((resolve, reject) => {
    conn.query(query, (err, res) => {
      if(err) reject(err);
      else resolve(res);
    });
  });
}

function deleteItem(id) {
  let query = `delete from ${this.name} where id = ${id}`;
  return new Promise((resolve, reject) => {
    conn.query(query, (err, res) => {
      if(err) reject(err);
      else resolve(res);
    });
  });
}

function allDepartment() {
  let query = `select distinct department from ${this.name}`;
  return new Promise((resolve, reject) => {
    conn.query(query, (err, res) => {
      if(err) reject(err);
      else resolve(res);
    });
  });
}

Client.prototype = new BaseTable();
Client.prototype.constructor = Client;

module.exports = new Client();
// let client = new Client();
// client.create();
