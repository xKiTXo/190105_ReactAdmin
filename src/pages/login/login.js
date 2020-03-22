import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import {UserOutlined,LockOutlined  } from '@ant-design/icons';

import './login.less'
import logo from './images/logo.png'

const Item = Form.Item;



class Login extends Component{

   

    onFinish=(event)=>{
        console.log('onFinish',event);
    }
    
    
    render(){
        
        return(
            <div className="login">

                <header className='login-header'>
                    <img src={logo} alt='logo'/>
                    <h1>React項目: 後台管理系統</h1>
                </header>

                <section className='login-content'>
                    <h2>用戶登錄</h2>
                    <Form fields={fields} onFinish={this.onFinish} className="login-form" name="basic">
                        <Item
                            name="username"
                            rules={[
                                {required: true,message: 'Please input your username!',},
                            ]}
                        >
                            <Input onChange={(e)=>{this.setState({btn:e.target.value})}} placeholder='用戶名' prefix={<UserOutlined/>}/>
                        </Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {required: true,message: 'Please input your password!',},
                            ]}
                        >
                            <Input.Password placeholder='密碼' prefix={<LockOutlined />}/>
                        </Form.Item>

                        <Form.Item >
                            <Button className="login-form-button" type="primary" htmlType="submit">{this.state.btn}</Button>
                        </Form.Item>
                    </Form>
                </section>

            </div>
        )
    }
}


export default Login;