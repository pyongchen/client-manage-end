const router = require('koa-router')();
const ClientCtrl = require('../controllers/clientCtrl');

router.prefix('/cgi');

router.get('/clients', ClientCtrl.clients); // 获取所有客户
router.post('/addClient', ClientCtrl.addClient); // 添加客户
router.post('/updateClient', ClientCtrl.updateClient); // 更新客户
router.post('/deleteClient', ClientCtrl.deleteClient); // 删除客户
router.get('/allDepartment', ClientCtrl.allDepartment); // 获取部门列表

module.exports = router;
