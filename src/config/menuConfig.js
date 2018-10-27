const menuList = [
    {
        title:'首页',
        key:'/admin/home'
    },
    {
        title:'表格管理',
        key:'/admin/table',
        children:[
            {
                title: '表格详情',
                key: '/admin/table/detail',
            },
            {
                title: '可修改的表格',
                key: '/admin/table/modify',
            }
        ]
    },
    {
        title:'富文本框',
        key:'/admin/editor',
    }
]

export default menuList;