import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, deleteTodo} from '../Redux/Todo/action';
import {useNavigate} from 'react-router-dom';

export const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const todos = useSelector(store => store.todos.todos);

    const [text, setText] = useState(null);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = () => {
        dispatch(addTodo(text));
    }

    const todoList = (e) => {
        navigate(`/todo/${e.target.parentElement.id}`);
    }

    const handleDelete = (e) => {
        dispatch(deleteTodo(e.target.parentElement.id));
    }

    return(
        <>
            <input type="text" onChange={handleChange}/>
            <input type="submit" value="submit" onClick={handleSubmit}/>
            {todos.map(t => {
                return(
                    <div
                        key={t.id}
                    >    
                        <span
                            className={t.status ? "Todo done" : "Todo not done"}
                            onClick={todoList}
                        >
                        {t.title}
                        </span>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                )
            })}

        </>
    )
}
