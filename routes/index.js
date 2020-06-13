const Router = require('express').Router
const router = Router()

router.use(require('./apiRoutes'))
// router.use(require('./htmlRoutes'))

module.exports = router