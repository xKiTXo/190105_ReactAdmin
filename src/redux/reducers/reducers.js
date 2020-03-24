const initState={
    categoryName:''
}
export const categoryReducer=(initState,action)=>{
    switch(action.type){
        case 'getCategoryName':{
            const preState=initState;
            // preState = action.categoryName
            return preState;
        }
    }

}