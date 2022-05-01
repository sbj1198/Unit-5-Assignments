import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { addTodo, deleteTodo } from "../Redux/action";
import { Link } from "react-router-dom";
import axios from 'axios';


export const TodosList = () => {

    const [text, setText] = useState("");

    const todos = useSelector((store) => store.todos);

    const dispatch = useDispatch();

    async function postTodo(payload){
        const res = await axios.post("http://localhost:8080/todos", payload);
        setText("");
        getTodo();
    }
    
    async function getTodo(){
        const res = await axios.get("http://localhost:8080/todos");
        dispatch(addTodo(res.data));
    }

    useEffect(() => {
        getTodo();
    }, []);

    const handleTodo = () => {
        const payload = {
            title: text,
            completed: false,
        };
        postTodo(payload);
    };

    return(
        <div>
            <input value={text} type="text" onChange={(e) => setText(e.target.value)} />
            <button 
                onClick={handleTodo}
            >
                Add Todo
            </button>
            {todos.map(t => <div key={t.id}><Link key={t.id} to={`/todo/${t.id}`}> {t.title} </Link> <button onClick={() => dispatch(deleteTodo(t.id))}>Delete</button> </div>)}
        </div>
    )
};