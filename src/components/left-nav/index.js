import React, { Component } from 'react';
import {Link} from 'react-router-dom'


import { Menu } from 'antd';
import {
    HomeOutlined,
    MailOutlined,
} from '@ant-design/icons';

import menuList from '../../config/menuConfig'

import logo from '../../assets/images/logo.png'
import './index.less'

const { SubMenu } = Menu;

export default class LeftNav extends Component{

    getMenuNodes=(menuList)=>{
       console.log( menuList)

        return (menuList.map(item=>{
        if(!item.children) {
            return (
              <Menu.Item key={item.key}>
                <Link to={item.key}>
                 
                  <span>{item.title}</span>
                </Link>
              </Menu.Item>
            )
          } else {
            return (
              <SubMenu
                key={item.key}
                title={
                  <span>
                  
                  <span>{item.title}</span>
                </span>
                }
              >
                {this.getMenuNodes(item.children)}
              </SubMenu>
            )
          }
       }))
    }

    render(){
        return(
            
            <div className='left-nav'>
                <Link to='/home' className="left-nav-header">
                    <img src={logo} alt='logo'/>
                    <h1>硅谷後台</h1>
                </Link>
            

                <Menu
                    mode="inline"
                    theme="dark"
                >
                
                {
                    this.getMenuNodes(menuList)
                }
                
                </Menu>  
                
            
            </div>
           
        )
    }
}
