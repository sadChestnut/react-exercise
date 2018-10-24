import React from 'react';
import './index.less';
import Utils from '../../utils/utils'
export default class Header extends React.Component {
    state={}
    componentWillMount(){
        setInterval(()=>this.setState({
            time : Utils.formateDate(new Date())
        }),1000);
    }
    render(){
        return(
            <div className="header-style">
                <p>管理员COCO,你好</p>
                <p>{this.state.time}</p>
            </div>
        )
    }
}