import React, { Component } from 'react';
import {Form,Select,Input} from 'antd'
import PropTypes from 'prop-types'

const Item = Form.Item;
const Option = Select.Option;

class AddFrom extends Component {
    static propTypes={
        categorys:PropTypes.array.isRequired,
        parentId:PropTypes.string.isRequired,
        setForm: PropTypes.func.isRequired,
    }

    UNSAFE_componentWillMount(){
        this.props.setForm(this.props.form)
    }
    render() { 
        const { getFieldDecorator } = this.props.form
        const {categorys,parentId} =this.props

        return (
            <Form>
                <Item>
                {
                    getFieldDecorator('parentId', {
                    initialValue: parentId
                    })(
                    <Select>
                        <Option key='0'>一级分类</Option>
                        {categorys.map(item=><Option key={item._id}>{item.name}</Option>)}
                    </Select>
                    )
                }

                </Item>

                <Item>
                {
                    getFieldDecorator('categoryName', {
                    initialValue: '',
                    rules: [
                        {required: true, message: '分类名称必须输入'}
                    ]
                    })(
                    <Input placeholder='请输入分类名称'/>
                    )
                }
                </Item>
            </Form>
        );
    }
}
 
export default Form.create()(AddFrom);