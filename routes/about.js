const { zh_CN, zh_TW, en_GB } = require('../config')
const router = require('koa-router')({
    prefix: '/about'
})
const controllers = require('../controllers')


const initialData = async (ctx, next) => {
    // controllers.about.post(ctx, next)
    await next()
}


router.get('/', initialData, async (ctx, next) => {
    const lang = ctx.cookies.get('lang')
    let cont = {}

    if (lang === 'en-GB') {
        cont = en_GB
    }
    else if (lang === 'zh-TW') {
        cont = zh_TW
    }
    else {
        cont = zh_CN
    }

    const { menu, about } = cont
    const currMenuItem = menu.filter(item => item.path === ctx.request.path)[0]

    await ctx.render('about', {
        lang,
        pathname: ctx.request.path,
        head: {
            title: zh_CN.head.title,
            javascript: zh_CN.head.javascript,
            style: zh_CN.head.style,
        },
        header: {
            title: currMenuItem.label,
            left: {
                label: '',
                icon: 'icon-goback',
                link: 'javascript:window.history.go(-1)',
            },
            right: {
                label: '',
                icon: 'icon-menu',
            },
        },
        menu,
        about,
    })
})


module.exports = router