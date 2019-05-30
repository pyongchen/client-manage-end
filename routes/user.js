const router = require('koa-router')();
const LoginCtrl = require('../controllers/loginCtrl');
const LogoutCtrl = require('../controllers/logoutCtrl');
const RegisterCtrl = require('../controllers/registerCtrl');
const UpdateCtrl = require('../controllers/updateClient');

router.prefix('/user');

router.post('/login', LoginCtrl); // 登录
router.post('/logout', LogoutCtrl); // 退出
router.post('/register', RegisterCtrl); // 注册
router.post('/updatePass', UpdateCtrl); // 修改密码

module.exports = router;
