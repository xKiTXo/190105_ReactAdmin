import React, { Component } from 'react';
import {Form,Select,Input} from 'antd'


const Item = Form.Item;
const Option = Select.Option;

class AddFrom extends Component {
    

    render() { 
        const { getFieldDecorator } = this.props.form

        return (
            <Form>
                <Item>
                {
                    getFieldDecorator('parentId', {
                    initialValue: '0'
                    })(
                    <Select>
                        <Option value='0'>一级分类</Option>
                        
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