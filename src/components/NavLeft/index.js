import React from 'react';
import { Menu, Icon } from 'antd';
import menuConfig from '../../config/menuConfig';
import './index.less';
const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component{
    state={};
    componentWillMount(){
        const menuList = this.getMenuList(menuConfig);
        this.setState({
            menuList
        })
    }
    getMenuList = (menuConfig) =>{
        return(
            menuConfig.map((item)=>{
                if(item.children){
                    return <SubMenu key={item.key} title={ item.title }>
                                {this.getMenuList(item.children)}
                            </SubMenu>
                }
                return <Menu.Item key={item.key} title={ item.title }>{ item.title }</Menu.Item>
            })

        )
    }
    render(){
        return(
            <div>
                <div className="menu-title">
                    <p><Icon type="star" className="menu-icon"/>XX管理系统</p>
                </div>
                <Menu
                    mode="inline"
                    theme="dark"
                    className="menu-style"
                >
                {this.state.menuList}
                </Menu>
            </div>
        )
    }
}