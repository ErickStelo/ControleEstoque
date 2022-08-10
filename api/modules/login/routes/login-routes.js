const router = require('express-promise-router')();
const controller = require('../controller/login-controller')

router.post('/executaLogin', controller.executaLogin);

module.exports = router;