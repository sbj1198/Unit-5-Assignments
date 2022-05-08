import { useDispatch ,useSelector } from "react-redux";
import {useParams} from 'react-router-dom';
import { toggleTodo } from "../Redux/Todo/action";

export const Todo = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    const todos = useSelector(store => store.todos.todos);

    const todo = todos.find(t => t.id == id);

    return(
        <>
            <h3>Todo: {todo.title}</h3>
            <p>Status: {todo.status ? "Completed" : "Not completed"}</p>
            <button
                onClick={() => {
                    dispatch(toggleTodo(id));
                }}
            >
            {todo.status ? "Not Done" : "Done"}
            </button>
        </>
    )

}
