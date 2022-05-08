import { USER_STATUS } from "./action";

const init = {isLoggedIn: 'false'};

export const authReducer = (store = init, {type, payload}) => {
    switch(type){
        case USER_STATUS:
            if(payload !== null){
                return{
                    ...store, 
                    isLoggedIn: payload
                }
            }
            return store;
        default:
            return store;
    }
}