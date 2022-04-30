import './style.css'
import { store } from './store';

const s = store.getState();

const getTodos = (e) => {
  e.preventDefault();
  const todo = document.getElementById('user-todo').value;
  const action = {
    type: "ADD_TODO",
    payload: todo
  };
  store.dispatch(action);
};

document.getElementById('submit').addEventListener('click', getTodos);