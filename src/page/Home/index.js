import React from 'react';
import { Row, Col } from 'antd';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/chart/line';
import ReactEcharts from 'echarts-for-react';
import NavLeft from '../../components/NavLeft';
export default class Home extends React.Component{
    getOption=()=>{
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
    render(){
        return(
            <div>
                <Row>
                    <Col span={4}><NavLeft/></Col>
                    <Col span={10}>
                        <ReactEcharts option={this.getOption()} style={{height: '500px'}}/>
                    </Col>
                </Row>
            </div>
        )
    }
}