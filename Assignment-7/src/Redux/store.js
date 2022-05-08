import {legacy_createStore as createStore, combineReducers} from 'redux';
import { authReducer } from './Auth/reducer';
import { todosReducer } from './Todo/reducer';


const rootReducer = combineReducers({
    auth: authReducer,
    todos: todosReducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)