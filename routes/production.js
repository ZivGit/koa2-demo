const { zh_CN, zh_TW, en_GB } = require('../config')
const router = require('koa-router')({
    prefix: '/production'
})
const controllers = require('../controllers')


const initialData = async (ctx, next) => {
    // controllers.about.post(ctx, next)
    await next()
}


router.get('/:type?', initialData, async (ctx, next) => {
    const { type } = ctx.params
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

    const { menu, production } = cont
    const path0 = ctx.request.path.replace(/\//g, '{@}/').split('{@}').slice(1)[0]
    const currMenuItem = menu.filter(item => item.path === path0)[0]

    await ctx.render('production', {
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
                link: 'javascript:window.location.replace("/")',
            },
            right: {
                label: '',
                icon: 'icon-menu',
            },
        },
        menu,
        production,
        tabActionKey: type !== undefined ? Number(type) : 0,
    })
})


module.exports = router