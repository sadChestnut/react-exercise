import React from 'react';
import {Row, Col} from 'antd';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import './style/common.less';
export default class Admin extends React.Component {
    render(){
        return(
            <div>
                <Row className="container">
                    <Col span={3} className="nav-left">
                        <NavLeft />
                    </Col>
                    <Col span={21} className="main">
                        <Row span={5}><Header/></Row>
                        <Row span={19} className="content">
                            {this.props.children}
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}