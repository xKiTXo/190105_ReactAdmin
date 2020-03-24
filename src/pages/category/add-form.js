import React, { Component } from 'react';
import {Form,Select,Input} from 'antd'


const Item = Form.Item;
const Option = Select.Option;

class AddFrom extends Component {
    

    render() { 
        
        return (
            <Form>
                <Item >
                    <Select defaultValue='0'>
                        <Option value='0'>一級分類</Option>
                        <Option value='1'>電腦</Option>
                        <Option value='2'>圖書</Option>
                    </Select>
                </Item>

                <Item 
                    rules={[
                        { required: true, message: '請輸入分類名!' }
                    ]}>
                    <Input placeholder='請輸入分類名'/>
                </Item>
                
            </Form>
        );
    }
}
 
export default AddFrom;