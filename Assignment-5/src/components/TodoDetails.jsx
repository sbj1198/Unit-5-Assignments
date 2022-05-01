import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../Redux/action";

export const TodoDetails = () => {

    const {id} = useParams();
    // console.log(id);
    const dispatch = useDispatch();

    const todos = useSelector((store) => store.todos); 
    // console.log(todos);
    
    const t = todos.find(e => e.id == id);


    return(
        <div>
            {/* {todos.map((t) => (
               <div key={t.id}>
                   {t.id == id ? t.title : null} - {t.id == id ? t.completed ? "Done" : "Not Done" : null}
               </div>
            ))} */}
            <div key={t.id}>{t.title} - {t.completed ? "Done" : "Not Done"}</div>
            <button onClick={() => dispatch(toggleTodo(t.id))}>Toggle Status</button>
        </div>
    )
};

// {todos.map((t) => (
               
//     <div key={t.id}>
//         {/* {console.log(t)} */}
//         {/* {t.id === id ? t.title : null} */}

//     </div>
//    ))}