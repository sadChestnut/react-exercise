import React from 'react';
import './index.less';
import Utils from '../../utils/utils';
import axios from '../../axios';
export default class Header extends React.Component {
    state={}
    getWeatherInfo=()=>{
        let _this = this;
        axios.getApiResult({
            url:'weather/weatherInfo?city=110101&key=986dea86a712dfa8a2d324854253e0ba',
            data:''
        }).then(result=>{
            let data = result.lives[0];
            _this.setState({
                temperature:data.temperature,
                weather:data.weather
            })
            console.log(result)
        })
    }
    componentWillMount(){
        setInterval(()=>this.setState({
            time : Utils.formateDate(new Date())
        }),1000);
    }
    componentDidMount(){
        //this.getWeatherInfo();
    }
    render(){
        return(
            <div className="header-style">
                <div>
                    <span>管理员COCO,你好</span>
                    <span>{this.state.time}</span>
                </div>
                <div>
                    <span>温度：<i>{this.state.temperature}</i></span>
                    <span>天气：<i>{this.state.weather}</i></span>
                </div>
            </div>
        )
    }
}