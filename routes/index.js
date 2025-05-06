const router = require('express').Router()

router.use(require('./authRoutes'))
router.use(require('./sessionRoutes'))
router.use(require('./fakeRoutes'))

module.exports = router