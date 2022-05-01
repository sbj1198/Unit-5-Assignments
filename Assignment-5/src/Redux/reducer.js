import { ADD_TODO, addTodo, TOGGLE_TODO, DELETE_TODO } from "./action";

export const todoReducer = (store, {type, payload}) => {
    switch(type){
        case ADD_TODO:
            return {...store, todos: payload};
        case TOGGLE_TODO:
            return{
                ...store,
                todos: store.todos.map(todo => todo.id == payload ? {...todo, completed: !todo.completed} : todo),
            }
        case DELETE_TODO:
            return{
                ...store,
                todos: store.todos.filter((el) => el.id != payload)
            }
        default:
            return store;
    };
};