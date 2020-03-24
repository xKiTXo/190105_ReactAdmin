import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Form,Input} from 'antd'

import {connect} from 'react-redux'
import store from '../../redux/store'



const Item = Form.Item;

class UpdateFrom extends Component {
    
    static state={
        value:''
    }

    static propTypes={
        categoryName:PropTypes.string.isRequired,
        setForm:PropTypes.func.isRequired
    }

    UNSAFE_componentWillMount(){
        const {categoryName}=this.props
        this.props.setForm()
        this.setState({value:categoryName})
    }

    
    render() {   
        const {categoryName}=this.props
        console.log(categoryName)
        
        return (
            
            <Form 
                initialValues={this.state.value}
                onValuesChange={(categoryName)=>{this.setState({
                    value:categoryName
                })}}
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
 


export default connect (null,null)(UpdateFrom);