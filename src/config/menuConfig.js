const menuList = [
    {
        title:'首页',
        key:'/home'
    },
    {
        title:'书籍管理',
        key:'/book',
        children:[
            {
                title: '书籍详情',
                key: '/book/detail',
            },
            {
                title: '书籍订单',
                key: '/book/order',
            }
        ]
    },
    {
        title:'员工管理',
        key:'/employee',
        children:[
            {
                title: '员工详情',
                key: '/employee/detail',
            },
            {
                title: '员工权限',
                key: '/employee/right',
            }
        ]
    }
]

export default menuList;