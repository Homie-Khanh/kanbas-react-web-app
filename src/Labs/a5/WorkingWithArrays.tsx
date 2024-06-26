import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const [todos, setTodos] = useState<any[]>([]);
    const fetchTodos = async () => {
      const response = await axios.get(API);
      setTodos(response.data);
    };
    const removeTodo = async (todo: { id: any; }) => {
        const response = await axios
          .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };    
    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };    
    const fetchTodoById = async (id: any) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };    
    const deleteTodo = async (todo: { id: any; }) => {
        const response = await axios.delete(`${API}/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
    };
    const updateTodo = async () => {
        const response = await axios.put(`${API}/${todo.id}`, todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      };    
    useEffect(() => {
      fetchTodos();
    }, []);
  
    return (
      <div>
        <h3>Working with Arrays</h3>
        <h4>Retrieving Arrays</h4>
        <a href={API} className="btn btn-primary">
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
        <input value={todo.id}
            onChange={(e) => setTodo({ ...todo,
            id: parseInt(e.target.value) })}/>
        <a href={`${API}/${todo.id}`} className="btn btn-primary">
            Get Todo by ID
        </a>
        <h3>Filtering Array Items</h3>
        <a href={`${API}?completed=true`} className="btn btn-primary">
            Get Completed Todos
        </a>
        <h3>Creating new Items in an Array</h3>
        <a href={`${API}/create`} className="btn btn-primary">
            Create Todo
        </a>
        <h3>Deleting from an Array</h3>
        <a href={`${API}/${todo.id}/delete`} className="btn btn-primary">
            Delete Todo with ID = {todo.id}
        </a>
        <h3>Updating an Item in an Array</h3>
        <input type="text" value={todo.title}
            onChange={(e) => setTodo({
            ...todo, title: e.target.value })}/>
        <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary">
            Update Title to {todo.title}
        </a>
        {/* ASK TA */}
        <h3>Updating Completed Property</h3>
        <input type="checkbox" checked={todo.completed}
            onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })}/>
        <a href={`${API}/${todo.id}/completed/${todo.completed}`} className="btn btn-primary">
            Completed Todo by ID = {todo.id}
        </a>
        <h3>Updating Description in Todos</h3>
        <input type="text" value={todo.description}
            onChange={(e) => setTodo({
            ...todo, description: e.target.value })}/>
        <a href={`${API}/${todo.id}/description/${todo.description}`} className="btn btn-primary">
            Describe Todo by ID = {todo.id}
        </a> <br />
        <h3>TODOS</h3>
        <input type="text" value={todo.id}
            onChange={(e) => setTodo({
            ...todo, id: parseInt(e.target.value) })} className="form-control"/>
        <input type="text" value={todo.title}
            onChange={(e) => setTodo({
            ...todo, title: e.target.value })} className="form-control"/> <br />
        <textarea value={todo.description}
            onChange={(e) => setTodo({ ...todo,
            description: e.target.value })} /> <br />
        <input value={todo.due} type="date"
            onChange={(e) => setTodo({
            ...todo, due: e.target.value })} /> <br />
        <label>
            <input checked={todo.completed} type="checkbox"
            onChange={(e) => setTodo({
                ...todo, completed: e.target.checked })} />
            Completed
        </label> <br />
        <button onClick={createTodo} className="btn btn-primary">
            Create Todo
        </button> <br />
        <button onClick={updateTitle} className="btn btn-success">
            Update Title
        </button> <br />
        <button onClick={postTodo} className="btn btn-warning"> 
            Post Todo 
        </button> <br />
        <button onClick={updateTodo} className="btn btn-secondary">
            Update Todo
        </button>
        <ul>
            {todos.map((todo) => (
            <li key={todo.id} className="form-control">
                {todo.title}
                <button onClick={() => removeTodo(todo)} className="btn btn-danger">
                    Remove
                </button>
                <button onClick={() => fetchTodoById(todo.id)} className="btn btn-warning">
                    Edit
                </button>
                <button onClick={() => deleteTodo(todo)}
                    className="btn btn-danger float-end ms-2">
                    Delete
                </button>
            </li>
            ))}
        </ul>
      </div>
    );
  }
  export default WorkingWithArrays;