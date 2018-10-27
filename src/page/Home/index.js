import React from 'react';
import { Card } from 'antd';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import './index.less';
import ReactEcharts from 'echarts-for-react';

export default class Home extends React.Component{
    getOption1=()=>{
        let option={
            title: {
                text: '季度销售走势图'
            },
            tooltip : {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: ['第一季度', '第二季度', '第三季度', '第四季度']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820,934,1290,760],
                type: 'line'
            }]
        }
        return option;
    }
    getOption2=()=>{
        let option = {
            title : {
                text: '某站点用户访问来源',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        return option;
    }
    render(){
        return(
            <div>
                <Card title="引用Echarts" className="card-style">
                    <div className="chart-style">
                        <ReactEcharts option={this.getOption1()} style={{height: '400px',width:'480px'}}/>
                        <ReactEcharts option={this.getOption2()} style={{height: '400px',width:'480px'}}/>
                    </div>
                </Card>
            </div>
        )
    }
}