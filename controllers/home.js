const {
    service: {
        api: { userinfo_delete, userinfo_post, userinfo_get, userinfo_put }
    }
} = require('../config')
const axios = require('axios')


async function post(ctx, next) {
    const { id, name, code, email, post, businessUnit, department } = ctx.request.body

    const params = {
        id,
        name,
        code,
        email,
        post,
        businessUnit,
        department,
    }

    await axios.post(userinfo_post, { params })
        .then(res => {
            if (res.status === 200) {
                ctx.state.code = 0
                ctx.state.data = res.data
            } else {
                ctx.state.code = -1
                ctx.state.data = {}
            }
        })

    await next()
}


module.exports = {
    post,
}