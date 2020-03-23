import ajax from './ajax'

// const BASE ='http://localhost:5000';
const BASE ='';
//Login
export const reqLogin =(username,password)=>ajax(BASE+'/login',{username,password},'POST')

//Add user
export const reqAddUser=(user)=>ajax(BASE+'/manage/user/add',user,'POST')

//jsonp 
export const reqWeather =(city)=>{
    const url =`http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=E4805d16520de693a3fe707cdc962045`
    // jsonp(url,{},(err,data)=>{
    //     console.log('jsonp()',err,data);
    // })
}
// reqWeather('北京')
