import React from 'react';
import {Row, Col} from 'antd';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
export default class Admin extends React.Component {
    render(){
        return(
            <div>
                <Row>
                    <Col span={4}>
                        <NavLeft/>
                    </Col>
                    <Col span={20}>
                        <Row span={5}><Header/></Row>
                        <Row></Row>
                    </Col>
                </Row>
            </div>
        )
    }
}