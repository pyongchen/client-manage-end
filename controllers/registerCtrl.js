const User = require('../database/table/User');

module.exports = async function(ctx, next) {
  let params = ctx.request.body;
  let username = params.username,
    password = params.password;
  let user = await User.getUserByName(username);
  if (user) ctx.body = { code: 3, msg: '用户名已注册，请更换' };
  else {
    let res = await User.insert([
      { username: username, password: password }
    ]);
    ctx.body = { code: 0, res: res }
  }
};
