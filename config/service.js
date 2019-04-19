const host = 'http://localhost:8080'

module.exports = {
    host,
    port: 3000,
    rootPathname: '',

    api: {
        // 雇员
        userinfo_delete: `${host}/userinfo/delete`,
        userinfo_post  : `${host}/userinfo/insert`,
        userinfo_get   : `${host}/userinfo/selectById`,
        userinfo_put   : `${host}/userinfo/update`,
    }
}