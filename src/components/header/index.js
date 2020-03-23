import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {ExclamationCircleOutlined} from '@ant-design/icons'
import { Modal } from 'antd';

import './index.less'

import {reqWeather} from '../../api'
import menuList from '../../config/menuConfig'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import {formateDate} from '../../utils/dateUtils';


class Header extends Component{

    state={
        currentTime:formateDate(Date.now()),
        weather:'',
    }

    getTime=()=>{
        this.Interval = setInterval(()=>{
            const currentTime =formateDate(Date.now())
            this.setState({currentTime})
        },1000)
    }

    getWeather=async()=>{
        const {type} = await reqWeather()
        this.setState({weather:type})
    }

    getTitle=()=>{
        const path =this.props.location.pathname;
        let title;
        menuList.forEach((item)=>{
            if(item.key===path){
                title = item.title
            }else if (item.children){
                const cItem = item.children.find(cItem=>cItem.key===path)
                if(cItem){
                    title = cItem.title
                }
            }
        })
        return title;
    }

    logout=()=>{
       
        Modal.confirm({
            icon: <ExclamationCircleOutlined />,
            content: '確定退出嗎?',
            onOk:()=> {
                console.log('logout',this)
                storageUtils.removeUser();
                memoryUtils.user={}
                this.props.history.replace('/login');
            }
        });
    }
        
    

    componentDidMount(){
        this.getTime()
        this.getWeather()
    }

    componentWillUnmount(){
        clearInterval(this.Interval)
    }

    render(){
        const {weather,currentTime} =this.state
        const user = memoryUtils.user.username
        const title = this.getTitle()
        return(
            <div className='header'>
                <div className='header-top'>
                    <span>歡迎, {user}</span>
                    <a href='javascrip:' onClick={this.logout}>退出</a>
                </div>
                <div className='header-bottom'>
                    <div className='header-bottom-left'>{title}</div>
                    <div className='header-bottom-right'>
                        <span>{currentTime}</span>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpJ3E1ly6y35j3Z-HfZGYSWIwd2pbW9F5pam1keT8DuYA--I9X' alt='weather'/>
                        <span>{weather}</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Header)
