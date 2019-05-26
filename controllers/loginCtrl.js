const User = require('../database/table/User');

module.exports = async function(ctx, next) {
  let params = ctx.request.body;
  let username = params.username,
    password = params.password;
  let user = await User.getUserByName(username);
  if (!user) ctx.body = { code: 1, msg: '用户名不存在' };
  else if (password != user.password) {
    ctx.body = { code: 2, msg: '密码错误' };
  } else {
    ctx.session.user = user;
    ctx.body = { code: 0, user: user };
  }
};
