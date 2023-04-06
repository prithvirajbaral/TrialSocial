import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchTodos = async () => {
            const todos = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
            setTodos(todos.data);
        };
        fetchTodos();
    }, [id]);

    return (
        <div className='container my-1'>
            <h1 className='text-center' style={{ color: "green", fontWeight: "bold" }}><u>TO DO</u></h1>
            {todos.map(todo => (
                <table className="table table-dark table-bordered mb-1" key={todo.id}>
                    <tbody>
                        <tr>
                        <td>
                            <h3>{todo.title}</h3>
                            {todo.completed ? <p style={{ color: "green", fontWeight: "bold" }}>'Completed TODOS'</p> : <p style={{ color: "orange", fontWeight: "bold" }}>'Pending TODOS'</p>}
                        </td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    );
};

export default Todos;
