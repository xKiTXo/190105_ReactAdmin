import React, { Component } from 'react';
import { Form, Input, Button, message} from 'antd';
import {UserOutlined,LockOutlined  } from '@ant-design/icons';

import {reqLogin} from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'

import './login.less'
import logo from './images/logo.png'
import { Redirect } from 'react-router-dom';


const Item = Form.Item;



class Login extends Component{

    onFinish = async (values) => {
        
        const {username,password} =values;
        
        const result = await reqLogin(username,password)
        //console.log('請求成功了',response.data);
        
        if(result.status===0){
            message.success('登入成功');

            const user =result.data;
            memoryUtils.user = user;
            storageUtils.saveUser(user);
            this.props.history.replace('/')

        }else{
            message.error(result.msg);
        }
    }

    onFinishFailed=(values, errorFields, outOfDate)=>{
        console.log('登錄失敗', values);
    }

    validatePwd=(rule, value)=>{
        if(!value){
           return Promise.reject('密碼必須輸入')
        }else if(value.length<4){
            return Promise.reject('密碼不能少於4位')
        }else if(value.length>12){
            return Promise.reject('密碼不能多於12位')
        }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
            return Promise.reject('密碼必需是英文,數字,_')
        }else{
            return Promise.resolve();
        }  
    }

    render(){   
        const user = memoryUtils.user

        if(user && user._id){
            return <Redirect to='/' />
        }


        return(
            <div className="login">

                <header className='login-header'>
                    <img src={logo} alt='logo'/>
                    <h1>React項目: 後台管理系統</h1>
                </header>

                <section className='login-content'>
                    <h2>用戶登錄</h2>
                    <Form initialValues={{'username':'admin'}} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed} className="login-form" name="basic">
                        <Item
                            name="username"
                            rules={[
                                {required: true,whitespace:true,message: '用戶名必需輸入'},
                                {min: 4, message:'用戶名至少4位'},
                                {max: 12, message:'用戶名最多12位'},
                                {pattern: /^[a-zA-Z0-9_]+$/,message:'用戶名必需是英文,數字,_'}
                            ]}
                        >
                            <Input placeholder='用戶名' prefix={<UserOutlined/>}/>
                        </Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {validator:this.validatePwd}
                            ]}
                        >
                            <Input.Password placeholder='密碼' prefix={<LockOutlined />}/>
                        </Form.Item>

                        <Form.Item >
                            <Button className="login-form-button" type="primary" htmlType="submit">登錄</Button>
                        </Form.Item>
                    </Form>
                </section>

            </div>
        )
    }
}


export default Login;