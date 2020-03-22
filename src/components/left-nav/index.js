import React, { Component } from 'react';
import {Link} from 'react-router-dom'


import { Menu } from 'antd';
import {
    HomeOutlined,
    MailOutlined,
} from '@ant-design/icons';

import logo from '../../assets/images/logo.png'
import './index.less'

const { SubMenu } = Menu;

export default class LeftNav extends Component{

    render(){
        return(
            <div>
                <div className='left-nav'>
                    <Link to='/home' className="left-nav-header">
                        <img src={logo} alt='logo'/>
                        <h1>硅谷後台</h1>
                    </Link>
                </div>

                <Menu
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="/home">
                        <Link to='/home'>
                            <HomeOutlined  />
                            <span>首頁</span>
                        </Link>
                    </Menu.Item>

                    <SubMenu
                        key="sub1"
                        title=
                        {
                            <span>
                                <MailOutlined />
                                <span>商品</span>
                            </span>
                        }
                    >
                        <Menu.Item key="/category">
                            <Link to='/category'>
                                <MailOutlined />
                                    品類管理
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="/product">
                            <Link to='/product'>
                                <MailOutlined />
                                    商品管理
                            </Link>
                        </Menu.Item>

                    </SubMenu>
                    
                    <Menu.Item key="/user">
                        <Link to='/user'>
                            <HomeOutlined  />
                            <span>用戶管理</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="/role">
                        <Link to='/role'>
                            <HomeOutlined  />
                            <span>角色管理</span>
                        </Link>
                    </Menu.Item>

                </Menu>
            </div>
        )
    }
}
