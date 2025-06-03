import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
    const [todos, setTodos] = useState([])
    const addTask = (userInput) => {
        if (userInput){
            const newTask = {
                id: Date.now(),
                task: userInput,
                complited: false
            }
            setTodos([...todos, newTask])
        }
    }
    console.log(todos)
    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }
    const toggleTask = (id) => {
        setTodos([...todos.map((todo) => todo.id === id? {...todo, completed: !todo.completed} : todo)])
    }
    return (
        <div className="todo-app -App">
            <h1>Todo list.</h1>
            <TodoForm addTask={addTask} />
            <hr className="seporator" />
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id}
                    removeTask={removeTask}
                    toggleTask={toggleTask} />
            ))}
        </div>
    );
}

export default App;
