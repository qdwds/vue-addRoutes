//  全部路由信息
/**
 * 模拟数据库表
 * id:自己id
 * uuid:跟随的路由
 */
module.exports = [
    {
        id: 1,
        uuid: 0,
        path: "/users",
        name: "users",
        title: "用户管理"
    }, {
        id: 2,
        uuid: 1,
        path: "del",
        name: "userDel",
        link: "/users/del",
        title: "删除用户"
    }, {
        id: 3,
        uuid: 1,
        path: "add",
        name: "userAdd",
        link: "/users/add",
        title: "增加用户"
    }, {
        id: 4,
        uuid: 3,
        path: "auth",
        name: "userAuth",
        link: "/users/add/auth",
        title: "授权页面"
    }, {
        id: 5,
        uuid: 0,
        path: "/journal",
        name: "journal",
        title: "日志管理"
    }, {
        id: 6,
        uuid: 5,
        path: "system",
        name: "journalSystem",
        link: "/journal/system",
        title: "系统日志"
    }, {
        id: 7,
        uuid: 5,
        path: "land",
        name: "journalLand",
        link: "/journal/land",
        title: "登陆日志"
    },

]