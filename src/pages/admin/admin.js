import React, { Component } from 'react';
import { Layout } from 'antd';

import memoryUtils from '../../utils/memoryUtils'
import { Redirect } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

class Admin extends Component{

    render(){
        const user = memoryUtils.user;

        if(!user || !user._id){
            return <Redirect to='/login'/>
        }

        return(
            <Layout>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}
export default Admin;