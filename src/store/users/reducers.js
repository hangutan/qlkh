const UPDATE_USER ='UPDATE_USER';
const LOG_OUT='LOG_OUT';
const LOGIN_ADMIN='LOGIN_ADMIN';
const initState = {
    user:''
}

const users = (state = initState,action)=>{
    switch(action.type){
        case UPDATE_USER : 
            return {
                ...state,
                user:action.payload.user
            }
        case LOG_OUT:
            return{
                ...state,
                user:action.payload.user
            }
        case LOGIN_ADMIN:
            return{
                ...state,
            }
        default:
            return state;
    }

    
}

export default users;