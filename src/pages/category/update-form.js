import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Form,Input} from 'antd'

import {connect} from 'react-redux'
import store from '../../redux/store'



const Item = Form.Item;

class UpdateFrom extends Component {
    
    static propTypes={
        categoryName:PropTypes.string.isRequired,
       
    }

    UNSAFE_componentWillMount(){
        const {categoryName}=this.props
       

    }

    
    render() {   
        const {categoryName}=this.props
        console.log(categoryName)
        
        return (
            
            <Form 
                initialValues={{categoryName:categoryName}}
            >
                <Item 
                    name='categoryName'
                    rules={[
                        { required: true, message: '請輸入分類名!' }
                    ]}>
                    <Input placeholder='請輸入分類名'  />
                </Item>
                
            </Form>
        );
    }
}
 


export default UpdateFrom;