import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {Form, Input, Button, Row, Col, Icon} from 'antd';
import './index.less';
const FormItem = Form.Item
class Login extends React.Component{
    handleSubmit =(e)=>{
        e.preventDefault();
        this.props.form.validateFields((err,value)=>{
            if(err){
                return;
            }
            sessionStorage.setItem('username',value.username);
            sessionStorage.setItem('password',value.password);
            window.location.hash = 'admin';
           // window.location.hash = 'admin/'+ new Date().getTime();
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <QueueAnim type={['right', 'left']} key="p" className="title-style">
                    <header  key="system">
                        XX后台管理系统
                    </header>
                </QueueAnim>
                <Row key="Row0" className="login-style">
                    <Col span={9}/>
                    <Col span={6}>
                        <Form layout="horizontal" onSubmit={this.handleSubmit}>
                            <FormItem style={{marginTop:20}}>
                                {
                                    getFieldDecorator('username',{
                                        rules: [{ required: true,min:4,max:10, message: '用户名为4-10个字符' }],
                                    })(<Input addonBefore={<Icon type="user" />} type="text" placeholder="请输入用户名"/>)
                                }
                            </FormItem>
                            <FormItem>
                                {
                                    getFieldDecorator('password',{
                                        rules: [{
                                            required: true, min: 6, max: 16, message: '密码为6-16个字符',
                                        }],
                                    })(<Input addonBefore={<Icon type="lock" />} placeholder="请输入密码" type="password"/>)
                                }
                            </FormItem>
                            <FormItem className="submit-button">
                                <Button type="primary" htmlType="submit">登录</Button>
                            </FormItem>
                        </Form>
                    </Col>
                    <Col span={9}/>
                </Row>
            </div>
        )
    }
}
export default Form.create()(Login);
//基础插件安装