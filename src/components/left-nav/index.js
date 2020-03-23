import React, { Component } from 'react';
import {Link ,withRouter} from 'react-router-dom'

import { Menu } from 'antd';

import menuList from '../../config/menuConfig'

import logo from '../../assets/images/logo.png'
import './index.less'

const { SubMenu } = Menu;

class LeftNav extends Component{

    getMenuNodes_map=(menuList)=>{
        return (
            menuList.map((item)=>{
                if(!item.children){
                    return(
                        <Menu.Item key={item.key}>
                            <Link to={item.key}>
                                <item.icon/>
                                <span>{item.title}</span>
                            </Link>
                        </Menu.Item>
                    )  
                }else{
                    return(
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
            })
        )
    }     
    getMenuNodes=(menuList)=>{
        const path =this.props.location.pathname;
        return(
            menuList.reduce((pre,item)=>{
                if(!item.children){
                    pre.push((<Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <item.icon/>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>))
                }else{

                    const cItem = item.children.find(cItem =>cItem.key===path)
                    
                    if(cItem){
                        this.openKey = item.key;
                    }

                    pre.push((<SubMenu
                            key={item.key}
                            title={
                                <span>
                                    <span>{item.title}</span>
                                </span>
                            }
                        >
                            {this.getMenuNodes(item.children)}
                        </SubMenu>
                    ))
                }
                return pre
            },[])
        )
    }

    componentWillMount(){
        this.menuNodes = this.getMenuNodes(menuList);
    }

    render(){
        
        const path =this.props.location.pathname;
        console.log('render()',path)

        const openKey = this.openKey;

        return(
            
            <div className='left-nav'>
                <Link to='/home' className="left-nav-header">
                    <img src={logo} alt='logo'/>
                    <h1>硅谷後台</h1>
                </Link>
            

                <Menu 
                    selectedKeys={[path]} defaultOpenKeys={[openKey]}
                    mode="inline" theme="dark" >
                {
                   this.menuNodes
                }
                </Menu>  
                
            
            </div>
           
        )
    }
}
export default withRouter(LeftNav)