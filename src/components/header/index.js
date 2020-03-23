import React, { Component } from 'react';
import './index.less'
export default class Header extends Component{

    render(){
        return(
            <div className='header'>
                <div className='header-top'>
                    <span>歡迎, admin</span>
                    <a href='javascrip:'>退出</a>
                </div>
                <div className='header-bottom'>
                    <div className='header-bottom-left'>首頁</div>
                    <div className='header-bottom-right'>
                        <span>2019-5-16 10:12:36</span>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpJ3E1ly6y35j3Z-HfZGYSWIwd2pbW9F5pam1keT8DuYA--I9X' alt='weather'/>
                        <span>晴</span>
                    </div>
                </div>
            </div>
        )
    }
}
