import React ,{Component}from 'react'
import {Button,message} from 'antd'

export default class App extends Component{
    handleClick=()=>{
        message.success('This is a message')
    }

    render(){
        return(
        <>
            <div>Appsdsd</div>
            <Button type="primary" onClick={this.handleClick}>ADD</Button>
        </>
        )
    }
}