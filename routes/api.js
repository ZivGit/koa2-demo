const router = require('koa-router')({
    prefix: '/api'
})
const controllers = require('../controllers')


router.get('/', async (ctx, next) => {
    ctx.status =  404
    ctx.body = 'Page Not Found'
})

// 雇员
router.post('/home', controllers.home.post)


module.exports = router