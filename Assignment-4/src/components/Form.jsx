import { useEffect, useState } from "react";
import {Skel} from './Skel';
import axios from 'axios';

export const Form = () => {

    const [table, setTable] = useState([]);
    const [info, setInfo] = useState(null);

    const handleChange = (e) => {
        if(e.target.name === "married"){
            setInfo({...info, [e.target.name] : e.target.checked});
        }
        else{
            setInfo({...info, [e.target.name] : e.target.value});
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!info.married){
            info.married = "No";
        }
        else{
            info.married = "Yes";
        }

        axios.post("http://localhost:8080/users", info).then((res) => res.data).then(d => setTable([...table, d]));
    };

    useEffect(() => {
        axios.get("http://localhost:8080/users").then((res) => res.data).then(d => setTable(d));
    }, []);


    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter your Name" onChange={handleChange}/>
                <br />
                <input type="number" name="age" placeholder="Enter your Age" onChange={handleChange}/>
                <br />
                <input type="text" name="address" placeholder="Enter your Address" onChange={handleChange}/>
                <br />
                <select name="department" onChange={handleChange}>
                    <option value="">**</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
                <br />
                <input type="number" name="salary" placeholder="Enter your Salary" onChange={handleChange} />
                <br />
                <input type="checkbox" name="married" id="married" checked={this} onChange={handleChange}/>
                <label htmlFor="married">I am Married</label>
                <br />
                <input type="submit" value="submit"/>
            </form>
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Department</th>
                    <th>Married</th>
                </tr>
                </tbody>
                {table.map(e => <Skel user={e}/>)}
            </table>
        </>
    )
};

