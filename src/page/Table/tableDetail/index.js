import React from 'react';
import { Card, Table, Tag, Button, Modal, Form, Input, Radio, DatePicker, message } from 'antd';
import moment from 'moment';
import axios from '../../../axios';
import utils from '../../../utils/utils';
//import './index.less';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { TextArea } = Input;
export default class Home extends React.Component{
    state={
        visible:false
    }
    componentDidMount(){
        this.requestData();
    }
    requestData=()=>{
        var _this = this;
        axios.getMockResult({
            url:'/table/detail',
            data:{}
        }).then(res=>{
            res.result.map((item,index)=>{
                item.key = index;
            })
            this.setState({
                dataSource:res.result,
                pagination:utils.pagination(res,(current)=>{
                    _this.requestData();
                })
            })
        })
    }
    clickRow=(record,index)=>{
        console.log(record);
        this.setState({
            selectedRowKeys:[index],
            selectedRows:record
        })
    }
    handleClick=()=>{
        const record = this.state.selectedRows;
        if(!record){
            message.warning("请先选择一个用户");
            return;
        }
        this.setState({
            visible:true
        })
    }
    render(){
        const columns=[
            {
                title: '姓名',
                dataIndex: 'username',
                key: 'username',
            },{
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                render:(sex)=>{
                    return sex == '1' ? '男':'女'
                }
            },{
                title: '标签',
                key: 'tags',
                dataIndex: 'tags',
                render:tags=>{
                    const tagDetail=[
                        '乐天派',
                        '超爱一点点',
                        '毅力强大',
                        '小可爱一枚',
                        '吃货一枚'
                    ];
                    return <Tag color="blue" key={tags}>{tagDetail[tags]}</Tag>
                }
            },{
                title: '是否已婚',
                dataIndex: 'isMarried',
                key: 'isMarried',
                render:(isMarried)=>{
                    return isMarried == 1 ? '是':'否';
                }
            },{
                title: '生日',
                dataIndex: 'birthday',
                key: 'birthday',
            },{
                title: '地址',
                dataIndex: 'address',
                key: 'address',
            }
        ];
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection={
            type:'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys, selectedRows)=>{
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        };
        return(
            <div>
                <Card>
                    <Button type="primary" onClick={this.handleClick} style={{ marginBottom:10 }}>查看详情</Button>
                </Card>
                <Table
                    onRow={(record,key)=>{
                        return{
                                onClick:()=>{this.clickRow(record,key)}
                        }
                    }}
                    columns={columns}
                    dataSource={this.state.dataSource}
                    pagination={this.state.pagination}
                    rowSelection={rowSelection}
                    className="content-wrap"
                />

                <Modal
                    title="详情"
                    visible={this.state.visible}
                    footer={null}
                    onCancel={()=>{
                        this.setState({
                            visible:false
                        })
                        this.infoForm.props.form.resetFields();
                    }}
                >
                    <InfoForm userInfo={this.state.selectedRows} wrappedComponentRef={(form)=>{ this.infoForm = form }}/>
                </Modal>
            </div>
        )
    }
}

class infoForm extends React.Component{
    render(){
        const { getFieldDecorator } = this.props.form;
        const userInfo = this.props.userInfo;
        const formItemLayout = {
            labelCol:{
               span:4
            },
            wrapperCol: {
                span: 20
            },
        }
        return(
            <Form>
                <FormItem
                    {...formItemLayout}
                    label="姓名"
                >
                    {
                        getFieldDecorator('username',{
                            initialValue:userInfo.username
                        })(
                            <Input type="text" />
                        )
                    }
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="性别"
                >
                    {
                        getFieldDecorator('sex',{
                            initialValue: userInfo.sex
                        })(
                            <RadioGroup>
                                <Radio value={1}>男</Radio>
                                <Radio value={2}>女</Radio>
                            </RadioGroup>
                        )
                    }
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="生日"
                >
                    {
                        getFieldDecorator('birthday',{
                            initialValue:moment(userInfo.birthday)
                        })(
                            <DatePicker value={userInfo.birthday} format= 'YYYY/MM/DD'/>
                        )
                    }
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="地址"
                >
                {
                    getFieldDecorator('address',{
                        initialValue: userInfo.address
                    })(
                        <TextArea autosize={{ minRows: 2, maxRows: 6 }}/>
                    )
                }
            </FormItem>
            </Form>
        )
    }
}
const InfoForm = Form.create()(infoForm)

//关闭表格之前原有的信息记得要清除