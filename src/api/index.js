import ajax from './ajax'
// import jsonp from 'jsonp'

import {message } from 'antd'
import axios from 'axios';


const BASE ='';
//Login
export const reqLogin =(username,password)=>ajax(BASE+'/login',{username,password},'POST')

//Add user
export const reqAddUser=(user)=>ajax(BASE+'/manage/user/add',user,'POST')

//get category list
export const reqCategorys =(parentId)=>ajax(BASE+'/manage/category/list',{parentId})

//add category item
export const reqAddCategory =(categoryName,parentId)=>ajax(BASE+'/manage/category/add',{categoryName,parentId},'POST')

//update category item
export const reqUpdateCategory =({parentId,categoryName})=>ajax(BASE+'/manage/category/update',{parentId,categoryName},'POST')

//weather API
export const reqWeather =()=>{
    
        const cors = 'https://cors-anywhere.herokuapp.com/';
        const url =cors+`http://t.weather.sojson.com/api/weather/city/101030100`

        return new Promise((resolve,rejecy)=>{
            axios.get(url).then((res)=>{

                if(res && res.data.status===200){
                    const {type} = res.data.data.forecast[0];
                    //console.log(res.data.data.forecast)
                    //console.log(type,ymd);
                    resolve({type})
                }else{
                    message.error('獲取信息失敗')
                }
            })
        })
        
                
           
              
            
        
        
    
}
reqWeather()
