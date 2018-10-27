import React from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Card } from 'antd';
import utils from "../../../utils/utils";
import axios from "../../../axios";
import './index.less';
const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    getInput = () => {
        if (this.props.inputType === 'number') {
            return <InputNumber />;
        }
        return <Input />;
    };

    render() {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            ...restProps
        } = this.props;
        return (
            <EditableContext.Consumer>
                {(form) => {
                    const { getFieldDecorator } = form;
                    return (
                        <td {...restProps}>
                            {editing ? (
                                <FormItem style={{ margin: 0 }}>
                                    {getFieldDecorator(dataIndex, {
                                        rules: [{
                                            required: true,
                                            message: `Please Input ${title}!`,
                                        }],
                                        initialValue: record[dataIndex],
                                    })(this.getInput())}
                                </FormItem>
                            ) : restProps.children}
                        </td>
                    );
                }}
            </EditableContext.Consumer>
        );
    }
}

export default class tableModify extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editingKey: '',data:[] };
        this.columns = [
            {
                title: '姓名',
                dataIndex: 'username',
                width:'20%',
                editable: true,
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width:'10%',
                editable: true,
                render:(sex)=>{
                    return sex == 1 ? '男':'女'
                }
            },
            {
                title: '是否已婚',
                dataIndex: 'isMarried',
                width:'10%',
                editable: true,
                render:(isMarried)=>{
                    return isMarried == 1 ? '是':'否'
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width:'20%',
                editable: true,
            },
            {
                title: '地址',
                dataIndex: 'address',
                width:'25%',
                editable: true,
            },
            {
                title: '修改',
                dataIndex: 'operation',
                render: (text, record) => {
                    const editable = this.isEditing(record);
                    return (
                        <div>
                            {editable ? (
                                <span>
                  <EditableContext.Consumer>
                    {form => (
                        <a
                            href="javascript:;"
                            onClick={() => this.save(form, record.key)}
                            style={{ marginRight: 8 }}
                        >
                            保存
                        </a>
                    )}
                  </EditableContext.Consumer>
                  <Popconfirm
                      title="确定撤销吗?"
                      onConfirm={() => this.cancel(record.key)}
                  >
                    <a>撤销</a>
                  </Popconfirm>
                </span>
                            ) : (
                                <a onClick={() => this.edit(record.key)}>编辑</a>
                            )}
                        </div>
                    );
                },
            },
        ];
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
                data:res.result,
                pagination:utils.pagination(res,(current)=>{
                    _this.requestData();
                })
            })
        })
    }
    isEditing = (record) => {
        return record.key === this.state.editingKey;
    };

    edit(key) {
        this.setState({ editingKey: key });
    }

    save(form, key) {
        form.validateFields((error, row) => {
            if (error) {
                return;
            }
            const newData = [...this.state.data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                this.setState({ data: newData, editingKey: '' });
            } else {
                newData.push(row);
                this.setState({ data: newData, editingKey: '' });
            }
        });
    }

    cancel = () => {
        this.setState({ editingKey: '' });
    };

    render() {
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };

        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    inputType: col.dataIndex === 'age' ? 'number' : 'text',
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                }),
            };
        });

        return (
                <Table
                    components={components}
                    bordered
                    dataSource={this.state.data}
                    columns={columns}
                    rowClassName="editable-row"
                    pagination={this.state.pagination}
                    className="content-wrap"
                />
        );
    }
}