import ajax from './ajax'
// import jsonp from 'jsonp'

import {message } from 'antd'
import axios from 'axios';


const BASE ='';
//Login
export const reqLogin =(username,password)=>ajax(BASE+'/login',{username,password},'POST')

//Add user
export const reqAddUser=(user)=>ajax(BASE+'/manage/user/add',user,'POST')

//jsonp 
export const reqWeather =()=>{
    
        const cors = 'https://cors-anywhere.herokuapp.com/';
        const url =cors+`http://t.weather.sojson.com/api/weather/city/101030100`

        return new Promise((resolve,rejecy)=>{
            axios.get(url).then((res)=>{

                if(res && res.data.status===200){
                    const {type,ymd} = res.data.data.forecast[0];
                    //console.log(res.data.data.forecast)
                    //console.log(type,ymd);
                    resolve({type,ymd})
                }else{
                    message.error('獲取信息失敗')
                }
            })
        })
        
                
           
              
            
        
        
    
}
reqWeather()
