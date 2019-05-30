const User = require('../database/table/User');

module.exports = async function(ctx, next) {
  let params = ctx.request.body;
  let password = params.password;
  let user = ctx.session.user;
  await User.updatePassword(user.id, password);
  ctx.body = { code: 0, msg: '修改成功' };
};
