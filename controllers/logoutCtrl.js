module.exports = async function(ctx, next) {
  ctx.session = null;
  ctx.body = { code: 0 };
};
