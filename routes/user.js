const router = require('koa-router')();
const LoginCtrl = require('../controllers/loginCtrl');
const LogoutCtrl = require('../controllers/logoutCtrl');
const RegisterCtrl = require('../controllers/registerCtrl');

router.prefix('/user');

router.post('/login', LoginCtrl); // 登录
router.post('/logout', LogoutCtrl); // 退出
router.post('/register', RegisterCtrl); // 注册

module.exports = router;
