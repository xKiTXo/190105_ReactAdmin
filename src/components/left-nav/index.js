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
                    <Menu.Item key="1">
                        <HomeOutlined  />
                        <span>首頁</span>
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
                        <Menu.Item key="5">
                            <MailOutlined />
                                品類管理
                        </Menu.Item>
                        <Menu.Item key="6">
                            <MailOutlined />
                                商品管理
                        </Menu.Item>
                    </SubMenu>


                </Menu>
            </div>
        )
    }
}
