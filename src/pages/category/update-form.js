import React, { Component } from 'react';
import {Form,Input} from 'antd'

const Item = Form.Item;

class UpdateFrom extends Component {
    

    render() { 
        
        return (
            <Form>
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
 
export default UpdateFrom;