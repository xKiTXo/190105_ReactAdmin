import React, { Component } from 'react';
import {Route,Switch ,Redirect } from 'react-router-dom';
import { Layout } from 'antd';


import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import Home from '../home/home'
import Category from '../category/category'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Order from '../order/order'

const {Footer, Sider, Content } = Layout;

class Admin extends Component{

    render(){
        const user = memoryUtils.user;

        if(!user || !user._id){
            return <Redirect to='/login'/>
        }

        return(
            <>
            <Layout style={{height:'100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header/> 
                    <Content  style={{backgroundColor:'#fff'}}>
                   
                        <Switch>
                            <Route path='/home' component={Home}/>
                            <Route path='/category' component={Category}/>
                            <Route path='/product' component={Product}/>
                            <Route path='/role' component={Role}/>
                            <Route path='/user' component={User}/>
                            <Route path='/charts/bar' component={Bar}/>
                            <Route path='/charts/line' component={Line}/>
                            <Route path='/charts/pie' component={Pie}/>
                            <Route path='/order' component={Order}/>
                            <Redirect to='/home'/> 
                        </Switch>    
                        
                        
                    </Content >
                    <Footer style={{textAlign:'center',color:'#cccccc'}}>推薦使用谷歌瀏覽器, 可以獲得更佳頁面操作體驗</Footer>
                </Layout>
            </Layout>
            </>
        )
    }
}
export default Admin;