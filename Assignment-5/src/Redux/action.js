export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO"
export const DELETE_TODO = "DELETE_TODO"

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data,
    };
};

export const toggleTodo = (id) => {
    return{
        type: TOGGLE_TODO,
        payload: id
    }
};

export const deleteTodo = (id) => {
    return{
        type: DELETE_TODO,
        payload: id
    }
};