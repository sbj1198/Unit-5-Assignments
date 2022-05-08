import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./action";

import {nanoid} from 'nanoid';

const init = {todos: []};

export const todosReducer = (store = init, {type, payload}) => {
    switch(type){
        case ADD_TODO:
            return{
                ...store,
                todos:[...store.todos, {title: payload, status: false, id: nanoid()}]
            }
        case DELETE_TODO:
            return{
                ...store,
                todos:[...store.todos.filter((todo) => todo.id !== payload)]
            }
        case TOGGLE_TODO:
            return{
                ...store,
                todos:[...store.todos.map(todo => {
                    if(todo.id === id){
                        todo.status  = !todo.status
                        return todo
                    }
                    return todo;
                })]
            }
        default:
            return store;
    }
}