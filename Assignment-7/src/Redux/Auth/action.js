export const USER_STATUS = "USER_STATUS";

export const userStatus = (data) => {
    return{
        type: USER_STATUS,
        payload: data
    }
};