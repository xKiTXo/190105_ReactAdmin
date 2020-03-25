import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Form,Input} from 'antd'

import {connect} from 'react-redux'
import store from '../../redux/store'



const Item = Form.Item;

class UpdateFrom extends Component {
    
    static propTypes={
        categoryName:PropTypes.string.isRequired,
        setForm: PropTypes.func.isRequired
    }

    UNSAFE_componentWillMount(){
        this.props.setForm(this.props.form)

    }

    
    render() {   
        const {categoryName}=this.props
        const { getFieldDecorator } = this.props.form
        
        return (
            
            <Form>
            <Item>
              {
               getFieldDecorator('categoryName', {
                  initialValue: categoryName,
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
 


export default Form.create()(UpdateFrom);