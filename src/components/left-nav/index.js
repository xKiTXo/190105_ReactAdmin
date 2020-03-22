import React, { Component } from 'react';

import logo from '../../assets/images/logo.png'
import './index.less'

export default class LeftNav extends Component{

    render(){
        return(
            <div className='left-nav'>
                <header className="left-nav-header">
                    <img src={logo} alt='logo'/>
                    <h1>硅谷後台</h1>
                </header>
            </div>
        )
    }
}
