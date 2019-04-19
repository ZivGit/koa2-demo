require('babel-register')
const { service } = require('./config')
const path        = require('path')
const Koa         = require('koa')
const Router      = require('koa-router')
const logger      = require('koa-logger')
const bodyParser  = require('koa-bodyparser')
const serve       = require('koa-static')
const render      = require('koa-ejs')
const compose     = require('koa-compose')
const debug       = require('debug')('mainiway-man-hour')
const response    = require('./middlewares/response')

const app = new Koa()
const router = new Router()


// 使用响应处理中间件
app.use(response)


// 日志中间件
app.use(logger())


// 解析请求体
app.use(bodyParser())


// 配置静态资源加载中间件
app.use(serve(path.join(__dirname, 'public')))


// 配置服务端模板渲染引擎中间件
render(app, {
    root: path.join(__dirname, 'views'),
    layout: '../public/template/layout',
    viewExt: 'ejs',
    cache: false,
    debug: true
})


// 引入路由分发
app.use(compose([
    require('./routes/api').routes(),
    require('./routes/home').routes(),
    require('./routes/production').routes(),
    require('./routes/news').routes(),
    require('./routes/about').routes(),
    require('./routes/contact-us').routes(),
]))


app.listen(service.port, () => debug(`listening on port ${service.port}`))