const Client = require('../database/table/Client');

async function getClients(ctx, next) {
  let user = ctx.session.user;
  if (!user) return ctx.body = { code: 4, msg: '登录态过期' };

  let res = await Client.getAll(ctx.request.query);
  ctx.body = { code: 0, list: res };
}

async function addClient(ctx, next) {
  let user = ctx.session.user;
  let params = ctx.request.body;
  if (!user) return ctx.body = { code: 4, msg: '登录态过期' };

  let client = {
    number: params.number,
    name: params.name,
    salesman: user.username,
    department: params.department,
    date: format(new Date())
  };
  let res = await Client.insert([client]);
  ctx.body = { code: 0, res: res };
}

async function updateClient(ctx, next) {
  let user = ctx.session.user;
  let params = ctx.request.body;
  if (!user) return ctx.body = { code: 4, msg: '登录态过期' };

  let client = {
    number: params.number,
    name: params.name,
    department: params.department,
  };
  let res = await Client.updateClient(params.id, client);
  ctx.body = { code: 0, res: res };
}

async function deleteClient(ctx, next) {
  let user = ctx.session.user;
  let params = ctx.request.body;
  if (!user) return ctx.body = { code: 4, msg: '登录态过期' };

  let id = params.id;
  let res = await Client.deleteItem([id]);
  ctx.body = { code: 0, res: res };
}

async function allDepartment(ctx, next) {
  let res = await Client.allDepartment();
  ctx.body = { code: 0, list: res };
}

function format(date) {
  let d = date;
  if(!(d instanceof Date)) d = new Date(d);
  let yyyy = d.getFullYear();
  let mm = d.getMonth() + 1;
  if(mm < 10) mm = '0' + mm;
  let dd = d.getDate();
  if(dd < 10) dd = '0' + dd;
  return yyyy + '-' + mm + '-' + dd
}

module.exports = {
  clients: getClients,
  addClient: addClient,
  updateClient: updateClient,
  deleteClient: deleteClient,
  allDepartment: allDepartment
};
