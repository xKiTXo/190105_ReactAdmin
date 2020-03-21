import React ,{Component}from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import {message} from 'antd'


import Login from './pages/login/login'
import Admin from './pages/admin/admin'


export default class App extends Component{
    handleClick=()=>{
        message.success('This is a message')
    }

    render(){
        return(
        <>
            <Router>
                
                <Switch>
                    <Route path='/login/' component={Login}/>
                    <Route path='/' exact component={Admin}/>
                </Switch>
            </Router>
        </>
        )
    }
}